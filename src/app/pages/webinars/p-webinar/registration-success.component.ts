import {Component} from '@angular/core'

@Component({
    template: `
        <h2 mat-dialog-title>Регистрация на вебинар</h2>
        <mat-dialog-content>
            <p>
                Благодарим за регистрацию на наш вебинар.
            </p>
            <p>
                Вы успешно зарегистрировались на вебинар. На указанный e-mail адрес мы вышлем письмо с информацией о том, где будет
                проходить вебинар, доступы для входа и полезную информацию по теме вебинара. 
            </p>
            <p>
                С уважением, АККУ-ЭНЕРГО.
            </p>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button color="primary" mat-dialog-close>Закрыть</button>
        </mat-dialog-actions>
    `,
    selector: 'app-registration'
})

export class RegistrationSuccessComponent {
}
