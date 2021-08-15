import {Component, Inject, OnDestroy} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Subscription} from 'rxjs'
import {FormSendingService} from '../../../handlers/form-sending/form-sending.service'

@Component({
    template: `
        <h2 mat-dialog-title>Получить консультацию менеджера</h2>
        <mat-dialog-content [formGroup]="form">
            <p>Заполните данные, чтобы мы смогли связаться с Вами.</p>
            <mat-form-field class="w-100" appearance="standard">
                <mat-label>Имя</mat-label>
                <input matInput formControlName="name">
                <mat-error>Заполните поле</mat-error>
            </mat-form-field>
            <mat-form-field class="w-100" appearance="standard">
                <mat-label>Телефон</mat-label>
                <input matInput formControlName="phone">
                <mat-error>Заполните поле</mat-error>
            </mat-form-field>
            <mat-form-field class="w-100" appearance="standard">
                <mat-label>Комментарий</mat-label>
                <textarea matInput formControlName="comment"></textarea>
            </mat-form-field>
            <input type="checkbox" [checked]="apply" (change)="apply = !apply">&nbsp;
            <mat-label>Даю согласие на обработку <a routerLink="/privacy-policy" mat-dialog-close>персональных данных</a></mat-label>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button color="primary" (click)="send()">Отправить</button>
        </mat-dialog-actions>
    `,
    selector: 'app-consultation-form',
    providers: [FormSendingService]
})

export class ConsultationFormComponent implements OnDestroy {
    constructor(
        private fs: FormSendingService,
        public dialogRef: MatDialogRef<ConsultationFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data) {
    }

    form: FormGroup = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required]),
        comment: new FormControl(null)
    })

    apply = true

    sub: Subscription = new Subscription()

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }

    send(): void {
        this.form.markAllAsTouched()
        if (this.form.invalid || !this.apply) return

        this.fs
            .send(this.form.value)
            .subscribe(() => {
                this.form.disable()
                this.dialogRef.close(true)
            })
    }
}
