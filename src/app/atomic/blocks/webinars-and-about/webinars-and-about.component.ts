import {Component, OnInit} from '@angular/core'
import {WebinarInterface} from '../../../handlers/data/webinar.interface'
import {DataService} from '../../../handlers/data/data.service'

@Component({
  templateUrl: './webinars-and-about.html',
  selector: 'app-webinars-and-about'
})
export class WebinarsComponent implements OnInit {
  items: WebinarInterface[] = []
  constructor(
    public data: DataService
  ) {
  }

  ngOnInit(): void {
    this.data.webinarsDownload()
  }
}
