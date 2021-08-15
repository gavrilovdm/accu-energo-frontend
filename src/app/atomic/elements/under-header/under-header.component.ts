import {Component, Input} from '@angular/core'
import {DataService} from '../../../handlers/data/data.service'
import {environment} from '../../../../environments/environment'

@Component({
    template: `
        <div class="container-fluid"
             [style.backgroundImage]="'url('+ image+')'"
             style="
                height: 700px;
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: cover;
             ">
            <div class="row h-100" style="background-color: rgba(42,63,114,.5);">
                <div class="col-lg-12 text-white d-flex align-items-center justify-content-center"> 
                    <div class="row">
                        <div class="col-12 text-center">
                            <div class="mat-display-2">«Акку-Энерго» – 17 лет на рынке</div>
                            <div class="mat-display-3">{{text}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    selector: 'app-under-header'
})
export class UnderHeaderComponent {
    url: string = environment.imgUrl
    @Input() text: string
    @Input() image: string

    constructor(
        public data: DataService
    ) {
    }
}
