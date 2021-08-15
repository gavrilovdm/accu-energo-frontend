import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MainDesktopMenuComponent} from './main-desktop-menu.component'
import {RouterModule} from '@angular/router'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule
    ],
    declarations: [MainDesktopMenuComponent],
    exports: [MainDesktopMenuComponent]
})

export class MainDesktopMenuModule {

}
