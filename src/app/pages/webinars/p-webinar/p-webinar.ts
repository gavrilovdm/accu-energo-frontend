import {Component, OnDestroy, OnInit} from '@angular/core'
import {environment} from '../../../../environments/environment'
import {WebinarInterface} from '../../../handlers/data/webinar.interface'
import {SpeakerInterface} from '../../../handlers/data/speaker.interface'
import {ActivatedRoute, Router} from '@angular/router'
import {DataService} from '../../../handlers/data/data.service'
import {MetaDataService} from '../../../handlers/meta-data/meta-data.service'
import {forkJoin, Subscription} from 'rxjs'
import * as moment from 'moment'
import {MatDialog} from '@angular/material/dialog'
import {RegistrationComponent} from './registration.component'
import {RegistrationSuccessComponent} from './registration-success.component'

@Component({
  templateUrl: './p-webinar.html',
  styles: [`
    .webinar-master-img {
      border-radius: 10px !important;
    }
  `]
})
export class PWebinarComponent implements OnInit, OnDestroy {
  url = environment.imgUrl
  item: WebinarInterface
  speakers: SpeakerInterface[] = []

  sub: Subscription = new Subscription()

  constructor(
    private route: ActivatedRoute,
    public data: DataService,
    private md: MetaDataService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.sub.add(
      forkJoin([
        this.data.webinarsGetItem(this.route.snapshot.params.url),
        this.data.webinarsGetSpeakers()
      ])
        .subscribe(
          ([rw, rs]) => {
            if (rw) {
              this.item = rw
              this.md.setMetaData({title: this.item.title, description: this.item.description})

              // For speakers
              if (
                // Has webinar any speakers?
                this.item.speakerId && this.item.speakerId.length > 0 &&
                // Have any speakers are?
                rs
              ) this.speakers = rs
                .filter(i => this.item.speakerId
                  .find(i2 => i2 === i.id)
                )
            }
          },
          () => this.router.navigate(['/'])
        )
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  canRegistration(date: string): boolean {
    return moment() < moment(date)
  }

  openRegistrationForm(title: string): void {
    this.dialog
        .open(RegistrationComponent, {data: {title}, maxWidth: '700px'})
        .afterClosed()
        .subscribe(value => {
          if (!value) return
          this.dialog.open(RegistrationSuccessComponent, {maxWidth: '450px'})
        })
  }
}
