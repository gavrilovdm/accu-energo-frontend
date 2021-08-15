import {Component, Inject, OnDestroy} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Subscription} from 'rxjs'
import {FormSendingService} from '../../../handlers/form-sending/form-sending.service'

@Component({
    template: `
        <h2 mat-dialog-title>Регистрация на вебинар</h2>
        <mat-dialog-content [formGroup]="form">
            <p>Заполните форму регистрации, чтобы зарегистрироваться на вебинар</p>
            <mat-form-field class="w-100" appearance="standard">
                <mat-label>Имя</mat-label>
                <input matInput formControlName="name">
                <mat-error>Заполните поле</mat-error>
            </mat-form-field>
            <mat-form-field class="w-100" appearance="standard">
                <mat-label>Фамилия</mat-label>
                <input matInput formControlName="lastname">
                <mat-error>Заполните поле</mat-error>
            </mat-form-field>
            <mat-form-field class="w-100" appearance="standard">
                <mat-label>Название компании</mat-label>
                <input matInput formControlName="companyName">
                <mat-error>Заполните поле</mat-error>
            </mat-form-field>
            <mat-form-field class="w-100" appearance="standard">
                <mat-label>Должность</mat-label>
                <input matInput formControlName="position">
                <mat-error>Заполните поле</mat-error>
            </mat-form-field>
            <mat-form-field class="w-100" appearance="standard">
                <mat-label>E-mail</mat-label>
                <input matInput formControlName="email">
                <mat-error>Заполните поле</mat-error>
            </mat-form-field>
            <mat-form-field class="w-100" appearance="standard">
                <mat-label>Телефон</mat-label>
                <input matInput formControlName="phone">
                <mat-error>Заполните поле</mat-error>
            </mat-form-field>
            <input type="checkbox" [checked]="apply" (change)="apply = !apply">&nbsp;
            <mat-label>Даю согласие на обработку <a routerLink="/privacy-policy" mat-dialog-close>персональных данных</a></mat-label>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button color="primary" (click)="send()">Записаться</button>
        </mat-dialog-actions>
    `,
    selector: 'app-registration',
    providers: [FormSendingService]
})

export class RegistrationComponent implements OnDestroy {
    constructor(
        private fs: FormSendingService,
        public dialogRef: MatDialogRef<RegistrationComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { title: string }) {
    }

    form: FormGroup = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        lastname: new FormControl(null, [Validators.required]),
        companyName: new FormControl(null, [Validators.required]),
        position: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required]),
        webinar: new FormControl(this.data.title)
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
