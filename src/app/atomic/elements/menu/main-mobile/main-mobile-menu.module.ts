import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MainMobileMenuComponent} from './main-mobile-menu.component'
import {RouterModule} from '@angular/router'
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatListModule,
        MatIconModule
    ],
    declarations: [MainMobileMenuComponent],
    exports: [MainMobileMenuComponent]
})

export class MainMobileMenuModule {

}
