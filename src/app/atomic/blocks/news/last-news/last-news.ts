import {Component} from '@angular/core'
import {NewInterface} from '../../../../handlers/data/new.interface'
import {DataService} from '../../../../handlers/data/data.service'
import {Observable} from 'rxjs'

@Component({
  templateUrl: './last-news.html',
  selector: 'app-last-news'
})
export class LastNewsComponent {
  items$: Observable<NewInterface[]> = this.data.newsDownloadLast(3)

  constructor(private data: DataService) {
  }
}
