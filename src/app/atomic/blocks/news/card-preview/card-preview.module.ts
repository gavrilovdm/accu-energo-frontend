import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {CardPreviewComponent} from './card-preview.component'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {EElevationDirectiveModule} from '../../../elements/elevation/elevation.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    EElevationDirectiveModule,
  ],
  declarations: [CardPreviewComponent],
  exports: [CardPreviewComponent]
})
export class CardPreviewModule {}
