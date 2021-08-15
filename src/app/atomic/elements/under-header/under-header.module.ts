import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {UnderHeaderComponent} from './under-header.component'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [UnderHeaderComponent],
  exports: [UnderHeaderComponent]
})
export class UnderHeaderModule {}
