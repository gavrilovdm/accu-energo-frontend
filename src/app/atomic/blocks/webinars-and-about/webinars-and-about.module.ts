import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {WebinarsComponent} from './webinars-and-about.component'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list'
import {SectionHeaderModule} from '../../elements/headers/section-header/section-header.module'

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatListModule, SectionHeaderModule],
  declarations: [WebinarsComponent],
  exports: [WebinarsComponent]
})
export class WebinarsAndAboutModule {
}
