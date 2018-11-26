import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Publication} from '../shared/models/publication.model';
import {User} from '../shared/models/user.model';
import {Comment} from '../shared/models/comment.model';

import {UserService} from '../shared/services/user.service';
import {PublicationService} from '../shared/services/publication.service';
import {CommentService} from '../shared/services/comment.service';
import {FollowerService} from '../shared/services/follower.service';
import {FileService} from '../shared/services/file.service';
import {LikeService} from '../shared/services/like.service';
import {Ng2IzitoastService} from 'ng2-izitoast';
import {NotificationService} from '../shared/services/notification.service';
import {SocketService} from '../shared/services/socket.service';

import {NgProgress} from '@ngx-progressbar/core';
import {Like} from '../shared/models/like.comment';

import {Events} from 'ionic-angular';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  listPublications: Array<Publication> = [];
  listComments: Array<Comment> = [];
  filesToUpload: Array<any> = [];
  finished: Boolean = true;
  user: User;
  page: any = 1;
  page2: any = 1;
  typeFiles: Array<string> = ['image', 'video'];
  publicationTotal: number;
  followerUser: Array<User> = [];
  followingUser: Array<User> = [];
  followerTotal: number;
  followingTotal: number;
  message: string;
  stateModal: any;
  clickDynamicArrayLoad: Array<any> = [];

  options = {
    min: 8,
    max: 100,
    ease: 'linear',
    speed: 200,
    trickleSpeed: 300,
    meteor: true,
    spinner: true,
    spinnerPosition: 'left',
    direction: 'ltr+',
    color: '#DC3545',
    thick: true,
  };

  startedClass = false;
  completedClass = false;
  preventAbuse = false;
  images: any[] = [];
  num = 1;

  pieChartColors: any[] = [{backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']}];

  pieOptions: any = {
    responsive: true,
    legend: {
      position: 'right'
    }
  };

  pieChartLabels: string[] = ['MS Word', 'Typing', 'Sage Pastel'];
  pieChartData: number[] = [300, 500, 100];
  pieChartType = 'pie';

  constructor(private userService: UserService,
              private publicationService: PublicationService,
              private commentService: CommentService,
              private followerService: FollowerService,
              private fileService: FileService,
              private likeService: LikeService,
              private route: Router,
              public iziToast: Ng2IzitoastService,
              public progress: NgProgress,
              private notificationService: NotificationService,
              public socketservice: SocketService,
              public events: Events) {
    for (this.num; this.num <= 9; this.num += 1) {
      this.images.push(this.num);
    }

    this.user = JSON.parse(localStorage.getItem('user'));
    console.log();
    this.GetFollowerByUserId();
    this.GetFollowingByUserId();
    this.GetPublicationByUserId();
    this.GetPublicationByFollowerUserId();

    this.socketservice.onSocket().subscribe(res => {

      switch (res.option) {

        case 'comment': {
          this.NewCommentRealTime(res);
          break;
        }

        case 'like': {
          this.NewLikeRealTime(res);
          break;
        }

        case 'dislike': {
          this.NewDisLikeRealTime(res);
          break;
        }

      }

    });
  }

  ngOnInit() {
    this.events.subscribe('modal', (res) => {
      this.stateModal = res;
    });
  }

  t(array) {
    this.clickDynamicArrayLoad = array;
  }

  p(likeArray, userId) {
    const x = likeArray.filter(item => item.userId._id == this.user._id);
    return x.length > 0 ? true : false;
  }

  FollowsModal(value) {
    switch (value) {
      case 'follower': {
        if (this.followerTotal > 0) {
          this.events.publish('modal', { type: 'follower', modalstate: true });
        }
        break;
      }

      case 'following': {
        if (this.followingTotal > 0) {
          this.events.publish('modal', { type: 'following', modalstate: true });
        }
        break;
      }

    }
  }


  NewCommentRealTime(res) {
    this.listPublications.forEach(item => {
      if (item._id === res.data.publicationId) {
        item.comment.unshift(res.data);
        item.totalComment += 1;
      }

    });
  }

  NewLikeRealTime(res) {
    this.listPublications.forEach(item => {
      if (item._id === res.data.publicationId) {
        item.totalLike += 1;
      }

    });
  }

  NewDisLikeRealTime(res) {
    this.listPublications.forEach(item => {
      if (item._id === res.data.publicationId) {
        item.totalLike -= 1;
      }

    });
  }

  GetFollowerByUserId() {
    this.followerService.GetFollowerByUserId(this.user._id).subscribe(
      res => {
        this.followerTotal = res.total;
        this.followerUser = res.response.map(item => {
          return item.followerId;
        });
      }, err => {
        console.log(err);
      });
  }

  GetFollowingByUserId() {
    this.followerService.GetFollowingByUserId(this.user._id).subscribe(
      res => {
        this.followingTotal = res.total;
        this.followingUser = res.response.map(item => {
          return item.userId;
        });
      }, err => {
        console.log(err);
      });
  }

  onScroll() {
    this.page++;
    this.GetPublicationByUserId();
    this.GetPublicationByFollowerUserId();
  }

  onScroll2() {
    this.page2++;
    this.GetFollowerByUserId();
  }

  Files(event: any) {
    this.filesToUpload = Array.from(event.target.files);
  }

  public AddPublication(dataForm) {

    const publication = dataForm.value;

    if (publication.message === null) { publication.message = ''; }

    const user = {
      avatar: this.user.avatar,
      _id: this.user._id,
      displayName: this.user.displayName
    };
    console.log('user publishing post >>>', user);
    publication.userId = this.user._id;

    /** If the user publishes only message (without image or video) */
    if (this.filesToUpload.length === 0) {
      publication.filePublication = [];
      this.publicationService.AddPublication(publication).subscribe(
        res => {
          res[0].userId = user;
          this.listPublications.unshift(res[0]);
          dataForm.reset();
        },
        err => {
          console.log(`Error posting message without media >>> ${err.error}`);
        });

    } else {
      // this.progress.start()

      this.fileService.AddFile(this.filesToUpload, this.user._id, 'publications').subscribe(
        res => {

          publication.filePublication = res;
          publication.message = publication.message.trim() === '' ? null : publication.message;

          this.publicationService.AddPublication(publication).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            res => {
              res[0].userId = user;
              this.listPublications.unshift(res[0]);
              dataForm.reset();

              this.filesToUpload = [];
              // this.progress.complete()
            },
            err => {
              console.log(`Error adding publication files. >>> ${JSON.stringify(err)}`);
              // this.progress.complete()
            });

        },
        err => {
          console.log(`Error publishing message or files >>> ${err.error}`);
        }
      );

    }
  }


  public GetPublicationByUserId() {

    this.publicationService.GetPublicationByUserId(this.user._id, this.page).subscribe(
      res => {
        this.publicationTotal = res.total;

        if (res.publications.length !== 6) {
          this.finished = false;
        }

        if (this.listPublications.length === 0) {
          this.listPublications = res.publications;
        } else {
          res.publications.forEach(item => {
            this.listPublications.push(item);
          });
        }

      },
      err => {
        console.log(err);
      });
  }

  public GetPublicationByFollowerUserId() {

    this.publicationService.GetPublicationFollowersByUserId(this.user._id, this.page).subscribe(
      res => {

        res.publications.forEach(publication => {
          this.listPublications.push(publication);
        });

      },
      err => {
        console.log(err);
      });
  }

  public AddComment(event, id, pos) {

    const body = {
      comment: this.message,
      publicationId: id,
      userId: this.user._id,
    };

    if (event.keyCode === 13) {

      this.commentService.AddComment(body).subscribe(
        res => {
          const response = res;
          delete response.userId;

          response.userId = {
            avatar: this.user.avatar,
            displayName: this.user.displayName
          };

          // this.listPublications[pos].comment.unshift(response)
          this.socketservice.AddComment(response, this.user);
          this.message = null;
        },
        err => {
          console.log(err);
        });
    }
  }

  SeeMoreComments(event, index, publicationId) {

    const indexPage = this.listPublications[index].indexCommentPagination++;

    this.commentService.GetCommentByPublicationId(indexPage, publicationId).subscribe(
      res => {
        const newArray = this.listPublications[index].comment.concat(res);
        this.listPublications[index].comment = newArray;
      },
      err => {
        console.log(err);
      });
  }

  public AddLike(data, pubUserId) {
    this.likeService.AddLike(data).subscribe(
      res => {
        this.socketservice.AddLike(data, pubUserId, this.user);
      },
      err => {
        console.log(err);
      });
  }

  public AddNotification(toUserId, message) {
    if (toUserId === this.user._id) { return; }

    return this.notificationService.AddNotification({
      description: message,
      userFromNotification: this.user._id,
      userToNotification: toUserId
    });

  }

  public RemoveLike(data, pubUserId) {
    this.likeService.RemoveLike(data).subscribe(
      res => {
        this.socketservice.RemoveLike(data, pubUserId, this.user);
      },
      err => {
        console.log(err);
      });
  }

  public Like_And_Unlike(pubId, pubUserId) {

    const x = document.getElementById(`like_${pubId}`);

    const body = {
      publicationId: pubId,
      userId: this.user._id,
    };

    const src = {
      unlike: 'assets/img/svg/456257.svg',
      like: 'assets/img/svg/456115.svg'
    };

    if (x.innerHTML.includes(src.unlike)) {
      x.querySelector('img').src = src.like;
      this.AddLike(body, pubUserId);
    } else {
      x.querySelector('img').src = src.unlike;
      this.RemoveLike(body, pubUserId);
    }

  }

  public GetLikeByPublicationId(pubId): string {
    let likes;

    this.likeService.GetLikeByPublicationId(pubId).subscribe(
      res => {
        likes = '5';
      },
      err => {
        console.log('error getlikebypublicationid ... ', err);
      });
    return likes;
  }

  public GetPublicationByUserIdTEST2() {

    this.publicationService.GetPublicationByUserId(this.user._id, this.page).subscribe(
      res => {

        this.publicationTotal = res.total;

        if (res.publications.length !== 6) {
          this.finished = false;
        }

        if (this.listPublications.length === 0) {
          this.listPublications = res.publications;
        } else {
          res.publications.forEach(item => {
            this.listPublications.push(item);
          });
        }

      },
      err => {
        console.log(err);
      });
  }
}
