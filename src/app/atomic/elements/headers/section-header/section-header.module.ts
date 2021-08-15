import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SectionHeaderComponent} from './section-header.component'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [SectionHeaderComponent],
  exports: [SectionHeaderComponent]
})

export class SectionHeaderModule {
}
