import {Component, OnInit} from '@angular/core'
import {DataService} from '../../../handlers/data/data.service'
import {MetaDataService} from '../../../handlers/meta-data/meta-data.service'
import {environment} from '../../../../environments/environment'

@Component({
  templateUrl: './p-partners.html',
  styles: [`
      .partner-card-img {
        max-width: 200px;
        max-height: 80px;
        margin: 0 auto 16px;
      }
  `]
})
export class PPartnersComponent implements OnInit {
  title = `Наши партнеры`
  description = `Здесь вы можете ознакомиться со списком партнеров ТОО «Акку-Энерго»`
  url = environment.imgUrl

  constructor(
    private md: MetaDataService,
    public data: DataService
  ) {
  }

  ngOnInit(): void {
    if (this.data.partnersData.length < 1) this.data.partnersDownload()
    this.md.setMetaData({ title: this.title, description: this.description })
  }
}
