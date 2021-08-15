import {Component, OnInit} from '@angular/core'
import {MetaDataService} from '../../handlers/meta-data/meta-data.service'
import {DataService} from '../../handlers/data/data.service'

@Component({
  templateUrl: './p-services.html'
})
export class PServicesComponent implements OnInit {
  title = `Услуги`
  description = `Проектирование, монтаж, пусконаладка, шеф-монтаж.`

  constructor(
    private md: MetaDataService,
    private data: DataService
  ) {
  }

  ngOnInit(): void {
    this.md.setMetaData({ title: this.title, description: this.description })
  }
}
