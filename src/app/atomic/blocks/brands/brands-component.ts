import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {BrandInterface} from '../../../handlers/data/brand.interface'
import {DataService} from '../../../handlers/data/data.service'
import {Subscription} from 'rxjs'
import {Router} from '@angular/router'
import {SeriesInterface} from '../../../handlers/data/series.interface'
import {environment} from '../../../../environments/environment'

@Component({
    template: `
        <div class="row" *ngIf="item">
            <div class="col-12" *ngIf="!isShowSeries">
                <app-section-header [title]="item.title"></app-section-header>
                <img class="d-block mx-auto py-2 img-fluid" [src]="url + item.img" style="max-width: 300px">
                <div [innerHTML]="item.text"></div>
            </div>
            <div class="col-12" *ngIf="isShowSeries">
                <app-section-header [title]="item.title +' '+ selectedSeries.title"></app-section-header>
                <img class="d-block mx-auto py-2 img-fluid" [src]="url + selectedSeries.img">
                <div [innerHTML]="selectedSeries.text"></div>
            </div>
            <div class="col-12 col-md-3 mb-3" *ngIf="isShowSeries">
                <mat-card class="h-100 d-flex flex-wrap align-items-center">
                    <img class="img-fluid" [src]="url + item.img">
                    <mat-card-actions>
                        <button mat-button (click)="goToBrand()">Назад</button>
                    </mat-card-actions>
                </mat-card>
            </div>
            <div class="col-12 col-md-3 mb-3" *ngFor="let s of series">
                <mat-card class="h-100">
                    <mat-card-header>
                        <mat-card-title>
                            {{s.title}}
                        </mat-card-title>
                    </mat-card-header>
                    <img class="img-fluid" [src]="url + s.img">
                    <mat-card-actions class="pt-1">
                        <button mat-button (click)="showSeries(s)">Показать</button>
                    </mat-card-actions>
                </mat-card>
            </div>
        </div>

    `,
    selector: 'app-brand-info'
})

export class BrandsComponent implements OnInit, OnDestroy {
    @Input() brandTitle: string

    item: BrandInterface

    series: SeriesInterface[] = []
    selectedSeries: SeriesInterface
    isShowSeries: boolean

    url = environment.imgUrl
    sub: Subscription = new Subscription()

    constructor(
        public data: DataService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.sub.add(
            this.data.brandsData
                .subscribe(r => {
                    if (!r) return
                    this.item = r.find(i => i.title === this.brandTitle)
                    this.data.seriesDownload(this.item.title)
                        .subscribe(r => {
                            if (!r) return
                            this.series = r
                        })
                })
        )
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }

    showSeries(series: SeriesInterface): void {
        this.isShowSeries = true
        this.selectedSeries = series

        this.router.navigate(['/catalog'], {
            queryParams: {...this.data.filtersFromUrl, series: series.title}
        })
    }

    goToBrand(): void {
        this.isShowSeries = false

        let newFilterString = {}

        if (this.data.filtersFromUrl.series) {
            for (const [key, value] of Object.entries(this.data.filtersFromUrl)) {
                if (key !== 'series') newFilterString = {...newFilterString, ...{[key]: value}}
            }
            this.router.navigate(['/catalog'], {
                queryParams: this.data.filtersFromUrl = newFilterString
            })
        }
    }
}
