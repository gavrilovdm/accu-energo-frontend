import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {LastNewsComponent} from './last-news'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {CardPreviewModule} from '../card-preview/card-preview.module'
import {SectionHeaderModule} from '../../../elements/headers/section-header/section-header.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    CardPreviewModule,
    SectionHeaderModule
  ],
  declarations: [LastNewsComponent],
  exports: [LastNewsComponent]
})
export class LastNewsModule {
}
