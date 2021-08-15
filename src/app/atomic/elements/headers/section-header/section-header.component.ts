import {Component, Input} from '@angular/core'

@Component({
    template: `<h2 class="mt-3" *ngIf="title">{{title}}</h2>`,
    selector: 'app-section-header'
})

export class SectionHeaderComponent {
    @Input() title: string
}
