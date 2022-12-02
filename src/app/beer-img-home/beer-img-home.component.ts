import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-beer-img-home',
  templateUrl: './beer-img-home.component.html',
  styleUrls: ['./beer-img-home.component.scss']
})
export class BeerImgHomeComponent implements OnInit {

  constructor(private render2: Renderer2) { }

  @ViewChild('img1') image1!: ElementRef;
  @ViewChild('img2') image2!: ElementRef;
  @ViewChild('img3') image3!: ElementRef;
  @ViewChild('img4') image4!: ElementRef;

  ngOnInit(): void {
    setTimeout(() => {
      const img1 = this.image1.nativeElement;
      const img2 = this.image2.nativeElement;
      const img3 = this.image3.nativeElement;
      const img4 = this.image4.nativeElement;

      let order = 1
      this.render2.addClass(img1, 'active');
      order++;

      setInterval(() => {
        if(order == 1) {
          this.render2.addClass(img1, 'active');
          order++;
        }else if(order == 2) {
          this.render2.removeClass(img1, 'active');
          this.render2.addClass(img2, 'active');
          order++;
        }else if(order == 3) {
          this.render2.removeClass(img2, 'active');
          this.render2.addClass(img3, 'active');
          order++;
        }else if(order == 4) {
          this.render2.removeClass(img3, 'active');
          this.render2.addClass(img4, 'active');
          order = 1;
        }
      }, 5000)
    }, 1);

  }

}
