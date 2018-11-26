import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { CommentService } from './services/comment.service';
import { FileService } from './services/file.service';
import { PublicationService } from './services/publication.service';
import { SocialLoginService } from './services/social.login.service';
import { FollowerService } from './services/follower.service';
import { SocketService } from './services/socket.service';
import { GroupService } from './services/group.service';
import { LikeService } from './services/like.service';
import { NotificationService } from './services/notification.service';
import { FilterUserPipeModule } from './pipes/filteruser.pipe';

@NgModule({
  declarations: [
    DropdownDirective,
    FilterUserPipeModule
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    FilterUserPipeModule
  ],
  providers: [
    GroupService,
    UserService,
    LoginService,
    PublicationService,
    CommentService,
    FollowerService,
    FileService,
    LikeService,
    NotificationService,
    SocketService,
    SocialLoginService
  ]
})
export class SharedModule {}
