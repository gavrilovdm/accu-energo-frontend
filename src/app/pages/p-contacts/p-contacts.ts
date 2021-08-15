import {Component, OnInit} from '@angular/core'
import {MetaDataService} from '../../handlers/meta-data/meta-data.service'
@Component({
  templateUrl: './p-contacts.html',
  styles: [`
    .map {
      min-height: 550px;
    }

    @media only screen and (max-width: 992px) {
      .map {
          min-height: 350px;
      }
    }
  `]
})
export class PContactsComponent implements OnInit {
  title = `Контакты`
  description = `Контактная информация филиалов нашей компании в Казахстане и Кыргызстане.`

  constructor(
    private md: MetaDataService
  ) {
  }

  ngOnInit(): void {
    this.md.setMetaData({title: this.title, description: this.description})
  }

  clickToPhone(): void {
    this.md.setGTMCustomEvent('phoneClick')
  }
}
