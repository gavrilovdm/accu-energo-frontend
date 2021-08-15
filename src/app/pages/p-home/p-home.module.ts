import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {PHomeComponent} from './p-home'
import {SliderModule} from 'src/app/atomic/elements/slider/slider.module'
import {BrandsModule} from 'src/app/atomic/blocks/features/brands/brands.module'
import {WebinarsAndAboutModule} from 'src/app/atomic/blocks/webinars-and-about/webinars-and-about.module'
import {LastNewsModule} from 'src/app/atomic/blocks/news/last-news/last-news.module'
import {ServicesModule} from '../../atomic/blocks/features/services/services.module'
import {AdvantagesModule} from '../../atomic/blocks/features/advantages/advantages.module'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: PHomeComponent}]),
        SliderModule,
        BrandsModule,
        WebinarsAndAboutModule,
        LastNewsModule,
        ServicesModule,
        AdvantagesModule,
    ],
  declarations: [PHomeComponent],
  exports: [RouterModule]
})
export class PHomeModule {
}
