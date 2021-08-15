import {Component} from '@angular/core'

@Component({
    template: `
        <h2 mat-dialog-title>Сообщение отправлено</h2>
        <mat-dialog-content>
            <p>
                Спасибо за Ваше сообщение. Ваше сообщение успешно отправлено. Мы свяжемся с Вами в ближайшее время.
            </p>
            <p>
                С уважением, АККУ-ЭНЕРГО.
            </p>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button color="primary" mat-dialog-close>Закрыть</button>
        </mat-dialog-actions>
    `,
    selector: 'app-consultation-form-success'
})

export class ConsultationFormSuccessComponent {
}
