import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AdvantagesComponent} from './advantages'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  declarations: [AdvantagesComponent],
  exports: [AdvantagesComponent]
})
export class AdvantagesModule {
}
