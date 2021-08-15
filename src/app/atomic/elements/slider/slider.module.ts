import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SliderComponent} from './slider'
import {CarouselModule} from 'ngx-owl-carousel-o'
import {RouterModule} from '@angular/router'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CarouselModule,
        MatIconModule,
        MatButtonModule,
    ],
  declarations: [SliderComponent],
  exports: [SliderComponent]
})
export class SliderModule {
}
