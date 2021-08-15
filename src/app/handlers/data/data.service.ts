import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {NewInterface} from './new.interface'
import {first, tap} from 'rxjs/operators'
import {BehaviorSubject, Observable, of} from 'rxjs'
import {environment} from '../../../environments/environment.prod'
import {WebinarInterface} from './webinar.interface'
import {SpeakerInterface} from './speaker.interface'
import {ProductInterface} from './product.interface'
import {BrandInterface} from './brand.interface'
import {SeriesInterface} from './series.interface'
import {CatalogInterface} from './catalog.interface'
import {TeammateInterface} from './teammate.interface'
import {PartnerInterface} from './partner.interface'
import {Router} from '@angular/router'
import {SliderInterface} from './slider.interface'

@Injectable({providedIn: 'root'})
export class DataService {
    url = environment.apiUrl

    /* CATALOG */
    filtersFromUrl: any // <-- query string from url
    productDownloading: boolean

    private productsSource = new BehaviorSubject<ProductInterface[]>(null)
    productData = this.productsSource.asObservable()

    private brandsSource = new BehaviorSubject<BrandInterface[]>(null)
    brandsData = this.brandsSource.asObservable()

    selectedBrands: string[] = []
    selectedSeries: string[] = []

    /* NEWS */
    newsData: NewInterface[] = [] // <-- Data
    newsDataRecent: NewInterface[] = [] // <-- Data, recent news (for recommendation block)
    newsLoading: boolean // <-- Status of loading
    newsFinished: boolean // <-- Trigger, when no more data to load (it's true when no more)

    /* WEBINARS */
    webinarsData: WebinarInterface[] = [] // <-- Data
    private webinarsSpeakers: SpeakerInterface[] = [] // <-- Speakers
    webinarsLoading: boolean // <-- Status of loading
    webinarsFinished: boolean // <-- Trigger, when no more data to load (it's true when no more)

    /* TEAM */
    teamData: TeammateInterface[] = []

    /* PARTNERS */
    partnersData: PartnerInterface[] = []

    constructor(
        private http: HttpClient,
        private router: Router) {
    }

    /*CATALOG PREVIEW INTERFACE*/
    catalogPreview: CatalogInterface[] = [
        {
            title: 'Стационарные аккумуляторы',
            img: 'assets/img/product-categories/i.jpg',
            url: {productType: 'accumulators', accumulatorType: 'stationary'}
        },
        {
            title: 'Тяговые аккумуляторы',
            img: 'assets/img/product-categories/draft.jpg',
            url: {productType: 'accumulators', accumulatorType: 'draft'}
        },
        {
            title: 'Источники бесперебойного питания',
            img: 'assets/img/product-categories/ibp.jpg',
            url: {productType: 'ups'}
        },
        {
            title: 'Оборудование СОПТ',
            img: 'assets/img/product-categories/sopt.jpg',
            url: {productType: 'sopt'}
        },
        {
            title: 'Шкафы для аккумуляторных батарей',
            img: 'assets/img/product-categories/shkaf.jpg',
            url: {productType: 'cabinets'}
        },
    ]

    /* SLIDER */
    sliderData: SliderInterface[] = [
        {
            title: 'Традиционная энергетика',
            img: 'assets/img/slider/img-1.jpg'
        },
        {
            title: 'Альтернативная энергетика',
            img: 'assets/img/slider/img-3.jpg'
        },
        {
            title: 'Телекоммуникация и связь',
            img: 'assets/img/slider/img_2.jpg'
        },
        {
            title: 'Железная дорога',
            img: 'assets/img/slider/img_4.jpg'
        },
        {
            title: 'Техника на электротяге',
            img: 'assets/img/slider/img_5.jpg'
        }
    ]

    /* CATALOG */
    productDownload(): Observable<ProductInterface[]> {
        this.productDownloading = true

        const params = `filter=${JSON.stringify(this.filtersFromUrl)}`

        return this.http
            .get<ProductInterface[]>(`${this.url}api/content/accumulators?${params}`)
            .pipe(tap(() => this.productDownloading = false))
    }

    getProducts(): void {
        this.http
            .get<[]>(`${this.url}api/content/accumulators`)
            .pipe(first())
            .subscribe(r => r?.length > 0 ? this.productsSource.next(r) : null)
    }

    brandsDownload(): void {
        this.http
            .get<BrandInterface[]>(`${this.url}api/content/brands`)
            .pipe(first())
            .subscribe(r => r?.length > 0 ? this.brandsSource.next(r) : null)
    }

    seriesDownload(brand: string): Observable<SeriesInterface[]> {
        return this.http
            .get<SeriesInterface[]>(`${this.url}api/content/series?brand=${brand}`)
    }

    setSelectedBrands(): void {
        if (Array.isArray(this.filtersFromUrl?.brands)) this.selectedBrands = this.filtersFromUrl.brands
        else if (this.filtersFromUrl?.brands) this.selectedBrands = [this.filtersFromUrl.brands]
        else this.selectedBrands = []
    }

    setSelectedSeries(): void {
        if (this.filtersFromUrl?.series) this.selectedSeries = this.filtersFromUrl.series
    }

    /* WEBINARS */

    webinarsDownload(count: number = 2, offset: number = 0) {
        this.webinarsLoading = true
        this.http
            .get<WebinarInterface[]>(this.url + `api/content/webinars?count=${count}`)
            .pipe(first())
            .subscribe(
                r => {
                    if (r) {
                        this.webinarsData = this.sortByDate([
                            ...this.webinarsData,
                            ...this.diff(r, this.webinarsData)
                        ])
                        if (r.length < count) this.webinarsFinished = true
                    }
                },
                () => this.webinarsFinished = true,
                () => this.webinarsLoading = false
            )
    }

    webinarsGetItem(url: string): Observable<WebinarInterface> {
        this.webinarsLoading = true
        const item = this.webinarsData
            .find(i => i.url === url)
        return item
            ? of(item)
                .pipe(tap(() => this.newsLoading = false))
            : this.http
                .get<WebinarInterface>(this.url + `api/content/webinars/${url}`)
                .pipe(tap(() => this.webinarsLoading = false))
    }

    webinarsGetSpeakers(): Observable<SpeakerInterface[]> {
        return this.webinarsSpeakers.length > 0
            ? of(this.webinarsSpeakers)
            : this.http
                .get<SpeakerInterface[]>(this.url + 'api/content/webinar_speakers')
                .pipe(tap(r => r ? this.webinarsSpeakers = r : null))
    }


    /* NEWS */

    newsDownloadLast(count: number = 3): Observable<NewInterface[]> {
        return this.http
            .get<NewInterface[]>(this.url + `api/content/news?count=${count}`)
            .pipe(tap(r => this.newsDataRecent = this.sortByDate(r))) // update recent
    }

    newsGetResent(count: number = 3): Observable<NewInterface[]> {
        return this.newsDataRecent.length > 0
            ? of(this.newsDataRecent)
            : this.newsDownloadLast(count)
    }

    newsDownload(count: number = 3, offset: number = 0) {
        this.newsLoading = true
        this.http
            .get<NewInterface[]>(this.url + `api/content/news`)
            .pipe(first())
            .subscribe(
                r => {
                    if (r) {
                        this.newsData = this.sortByDate([
                            ...this.newsData,
                            ...this.diff(r, this.newsData)
                        ])
                        if (r.length < count) this.newsFinished = true
                    }
                },
                () => this.newsFinished = true,
                () => this.newsLoading = false
            )
    }

    newsGetItem(url: string): Observable<NewInterface> {
        this.newsLoading = true
        const item = this.newsData
            .find(i => i.url === url)
        return item
            ? of(item)
                .pipe(tap(() => this.newsLoading = false))
            : this.http
                .get<NewInterface>(this.url + `api/content/news/${url}`)
                .pipe(tap(() => this.newsLoading = false))
    }

    /* TEAM */
    teamDownload(): void {
        this.http
            .get<TeammateInterface[]>(`${this.url}api/content/team`)
            .pipe(first())
            .subscribe(r => {
                if (r) {
                    this.teamData = r
                }
            })
    }

    /* PARTNERS */
    partnersDownload(): void {
        this.http
            .get<PartnerInterface[]>(`${this.url}api/content/partners`)
            .pipe(first())
            .subscribe(r => {
                if (r) {
                    this.partnersData = r
                }
            })
    }

    /* SERVICE METHODS */

    private diff(arrNew: any[], arrOld: any[], key: string = 'id'): any[] {
        return arrNew
            .filter(i => !arrOld
                .find(i2 => i2[key] === i[key])
            )
    }

    private sortByDate(arr: any[]): any[] {
        return arr.sort((b, a) => a.date.localeCompare(b.date))
    }

    getUrl(): void {
        console.log(this.router.url.split('?')[0]
        )
    }
}
