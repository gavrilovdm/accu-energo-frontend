import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FooterComponent} from './footer'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'

@NgModule({
    imports: [CommonModule, RouterModule, MatIconModule, MatListModule],
    declarations: [FooterComponent],
    exports: [FooterComponent]
})
export class FooterModule {
}
