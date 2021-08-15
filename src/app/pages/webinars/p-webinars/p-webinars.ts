import {Component, OnDestroy, OnInit} from '@angular/core'
import {WebinarInterface} from '../../../handlers/data/webinar.interface'
import {MetaDataService} from '../../../handlers/meta-data/meta-data.service'
import {DataService} from '../../../handlers/data/data.service'
import * as moment from 'moment'

@Component({
  templateUrl: './p-webinars.html'
})
export class PWebinarsComponent implements OnInit {
  title = 'Вебинары'
  description = 'Вебинары компании ТОО АККУ-ЭНЕРГО'

  items: WebinarInterface[] = []
  private count = 9
  private offset = 0

  constructor(
    private md: MetaDataService,
    public data: DataService
  ) {
  }

  ngOnInit(): void {
    this.md.setMetaData({title: this.title, description: this.description})
    if (this.data.newsData.length < 1) this.load()
  }

  load(count: number = this.count, offset: number = this.offset): void {
    this.data.webinarsDownload(count, offset)
  }

  showMore(): void {
    this.load(this.offset = this.count + this.offset)
  }
}
