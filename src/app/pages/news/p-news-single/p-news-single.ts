import {Component, OnDestroy, OnInit} from '@angular/core'
import {MetaDataService} from '../../../handlers/meta-data/meta-data.service'
import {DataService} from '../../../handlers/data/data.service'
import {NewInterface} from '../../../handlers/data/new.interface'
import {ActivatedRoute, Router} from '@angular/router'
import {Subscription} from 'rxjs'
import {environment} from '../../../../environments/environment'
import {mergeMap} from 'rxjs/operators'

@Component({
  templateUrl: './p-news-single.html'
})
// tslint:disable-next-line:component-class-suffix
export class PNewsSingleCmp implements OnInit, OnDestroy {
  url = environment.imgUrl
  item: NewInterface

  sub: Subscription = new Subscription()

  constructor(
    private route: ActivatedRoute,
    public data: DataService,
    private md: MetaDataService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.sub.add(
      this.route.params
        .pipe(mergeMap(params => this.data.newsGetItem(params.url)))
        .subscribe(
          r => {
            if (r) {
              this.item = r
              this.md.setMetaData({title: this.item.title, description: this.item.description})
            }
          },
          () => this.router.navigate(['/'])
        )
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
