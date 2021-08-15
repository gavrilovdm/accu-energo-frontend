import {Component, Input} from '@angular/core'

@Component({
    template: `<h1 class="mat-display-1 mt-3" *ngIf="title">{{title}}</h1>`,
    selector: 'app-page-header'
})

export class PageHeaderComponent {
    @Input() title: string
}
