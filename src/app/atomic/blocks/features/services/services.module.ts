import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ServicesComponent} from './services'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  declarations: [ServicesComponent],
  exports: [ServicesComponent]
})
export class ServicesModule {
}
