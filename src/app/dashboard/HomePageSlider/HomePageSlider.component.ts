import { Component, OnInit, Input} from '@angular/core';
import { NguCarousel, NguCarouselStore } from '@ngu/carousel';

@Component({
  selector: 'embryo-HomePageSlider',
  templateUrl: './HomePageSlider.component.html',
  styleUrls: ['./HomePageSlider.component.scss']
})
export class HomePageSliderComponent implements OnInit {

   @Input() isDirectionRtl: any;

   constructor() { }

   ngOnInit() {
   }


   public carouselBanner(value) {
      // @ts-ignore
     const carouselBanner: NguCarousel = {
         grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
         slide: 1,
         speed: 30000,
         interval: 8000,
         point: {
           visible: true
         },
         load: 1,
         loop: true,
         touch: true,
         animation: 'lazy',
         easing: 'ease'
      };

      if (value) {
      carouselBanner['RTL'] = true;
      } else {
      carouselBanner['RTL'] = false;
      }

      return carouselBanner;
   }

}
