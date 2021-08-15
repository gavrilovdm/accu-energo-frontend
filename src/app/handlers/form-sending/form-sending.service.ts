import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {MetaDataService} from '../meta-data/meta-data.service'
import * as moment from 'moment'
import {tap} from 'rxjs/operators'
import {environment} from '../../../environments/environment.prod'

@Injectable()
export class FormSendingService {
  url = environment.apiUrl

  constructor(
    private http: HttpClient,
    private md: MetaDataService
  ) {
  }

  send(data: any): Observable<any> {
    data.date = new Date().toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric'
    })
    return this.http
      .post(this.url + 'api/content/orders', data)
      .pipe(tap(() => this.md.setGTMCustomEvent('formSubmit')))
  }
}
