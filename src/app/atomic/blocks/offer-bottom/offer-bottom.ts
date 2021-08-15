import {Component, OnDestroy} from '@angular/core'
import {Subscription} from 'rxjs'
import {FormSendingService} from '../../../handlers/form-sending/form-sending.service'
import {MatDialog} from '@angular/material/dialog'
import {ConsultationFormComponent} from './consultation-form.component'
import {ConsultationFormSuccessComponent} from './consultation-form-success.component'

@Component({
  templateUrl: './offer-bottom.html',
  selector: 'app-offer-bottom',
  providers: [FormSendingService]
})
export class EOfferBottomComponent implements OnDestroy {

  sub: Subscription = new Subscription()

  constructor(
    private fs: FormSendingService,
    private dialog: MatDialog
  ) {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  openRegistrationForm(): void {
    this.dialog
        .open(ConsultationFormComponent, {maxWidth: '700px'})
        .afterClosed()
        .subscribe(value => {
          if (!value) return
          this.dialog.open(ConsultationFormSuccessComponent, {maxWidth: '450px'})
        })
  }
}
