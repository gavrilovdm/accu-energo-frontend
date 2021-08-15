import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {BackBtnComponent} from './back-btn.component'
import {RouterModule} from '@angular/router'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [BackBtnComponent],
    exports: [BackBtnComponent]
})

export class BackBtnModule {

}
