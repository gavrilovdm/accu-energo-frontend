import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {AboutUsComponent} from './about-us'
import {LazyLoadModule} from '../../../handlers/img-lazy-load/lazy-load.module'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'

@NgModule({
    imports: [CommonModule, RouterModule, LazyLoadModule, MatCardModule, MatButtonModule, MatIconModule],
    declarations: [AboutUsComponent],
    exports: [AboutUsComponent]
})
export class AboutUsModule {
}
