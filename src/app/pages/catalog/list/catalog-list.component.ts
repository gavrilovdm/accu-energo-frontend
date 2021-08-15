import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core'
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import {DataService} from '../../../handlers/data/data.service'
import {ProductInterface} from '../../../handlers/data/product.interface'
import {mergeMap} from 'rxjs/operators'
import {environment} from '../../../../environments/environment'
import {MatTableDataSource} from '@angular/material/table'
import {MatSort} from '@angular/material/sort'
import {MetaDataService} from '../../../handlers/meta-data/meta-data.service'

@Component({
    templateUrl: './catalog-list.html',
    styles: [`
        .table-wrapper {
            overflow: auto;
        }

        /* Изменение дефолтных стилей иконки развертывания mat-expansion-panel */
        ::ng-deep .specific-class > .mat-expansion-indicator:after {
            color: #3949ab;
        }

        .mat-expansion-panel-header-description {
            justify-content: space-between;
        }
    `]
})
export class CatalogListComponent implements OnInit, OnDestroy {
    title = `Продукция`
    description = `Акку-Энерго занимается продажей стационарных и тяговых аккумуляторов, ИБП, СОПТ, шкафов для аккумуляторных батарей`

    items: ProductInterface[] = []
    count = 9
    offset = 0
    url = environment.imgUrl

    isMoreDataInTheTable = true

    dataSource: MatTableDataSource<ProductInterface> = new MatTableDataSource<ProductInterface>([])
    @ViewChild(MatSort) sort: MatSort

    displayedColumns: string[] = []

    sub: Subscription = new Subscription()

    constructor(
        private route: ActivatedRoute,
        public data: DataService,
        private md: MetaDataService
    ) {
    }

    ngOnInit(): void {
        this.sub.add(
            this.route.queryParams.pipe(
                mergeMap(params => {
                    this.data.filtersFromUrl = params
                    this.data.setSelectedBrands()
                    return this.data.productDownload()
                })
            ).subscribe(r => r ? (this.items = r, this.createTableData(r)) : null)
        )

        this.md.setMetaData({title: this.title, description: this.description})
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }

    createTableData(items: ProductInterface[]): void {
        // Create columns if key exist
        this.setColumns('brand')
        this.setColumns('title')
        this.setColumns('voltage')
        this.setColumns('capacity')
        this.setColumns('power')

        this.setColumns('weight')
        this.setColumns('length')
        this.setColumns('width')
        this.setColumns('height')

        this.dataSource = new MatTableDataSource(items)
        this.dataSource.sort = this.sort
    }

    setColumns(field: string): void {
        if (this.displayedColumns.find(i => i === field)) return
        if (this.items.find(i => i.hasOwnProperty(field) && i[field]))
            this.displayedColumns.push(field)
    }

    unsetColumns(field: string): void {
        const index = this.displayedColumns.findIndex(i => i === field)
        if (index >= 0) this.displayedColumns.splice(index, 1)
    }

    toggleShowSizes(): void {
        this.isMoreDataInTheTable = !this.isMoreDataInTheTable
        if (this.isMoreDataInTheTable) {
            this.setColumns('weight')
            this.setColumns('length')
            this.setColumns('width')
            this.setColumns('height')
        } else {
            this.unsetColumns('weight')
            this.unsetColumns('length')
            this.unsetColumns('width')
            this.unsetColumns('height')
        }
    }

    isFilterSet(): boolean {
        return Object.keys(this.data.filtersFromUrl).length > 0
    }

    clickToDocument(): void {
        this.md.setGTMCustomEvent('openDocumentFromCatalog')
    }
}
