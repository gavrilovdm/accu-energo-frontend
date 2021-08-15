import {Component, Input} from '@angular/core'

@Component({
    template: `
        <button mat-button [routerLink]="link">
            <mat-icon inline="true">arrow_back</mat-icon> {{title}}
        </button>
    `,
    selector: 'app-back-btn'
})

export class BackBtnComponent {
    @Input() link: string
    @Input() title = 'Назад'
}
