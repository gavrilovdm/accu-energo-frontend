import {Component, OnInit} from '@angular/core'
import {DataService} from '../../../handlers/data/data.service'
import {NewInterface} from '../../../handlers/data/new.interface'
import {MetaDataService} from '../../../handlers/meta-data/meta-data.service'
import {environment} from '../../../../environments/environment'

@Component({
  templateUrl: './p-news.html'
})
export class PNewsComponent implements OnInit {
  title = 'Новости'
  description = 'Новости компании ТОО АККУ-ЭНЕРГО'

  items: NewInterface[] = []
  private count = 9
  private offset = 0
  url: string = environment.imgUrl

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
    this.data.newsDownload(count, offset)
  }

  showMore(): void {
    // this.load(this.offset = this.count + this.offset)
    this.load(this.offset, this.offset = this.count + this.offset)
  }
}
