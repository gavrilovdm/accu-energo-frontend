import {Component} from '@angular/core'
import {OwlOptions} from 'ngx-owl-carousel-o'
import {DataService} from '../../../handlers/data/data.service'

@Component({
    templateUrl: './slider.html',
    selector: 'app-slider'
})
export class SliderComponent {
    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: true,
        pullDrag: false,
        dots: true,
        nav: false,
        navSpeed: 700,
        responsive: {
            0: {items: 1}
        },
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 700,
        autoplayMouseleaveTimeout: 4000
    }

    items = this.data.catalogPreview

    constructor(
        public data: DataService
    ) {
    }
}
