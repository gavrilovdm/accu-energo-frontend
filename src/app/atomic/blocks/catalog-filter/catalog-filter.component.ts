import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {DataService} from '../../../handlers/data/data.service'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Subscription} from 'rxjs'
import {Router} from '@angular/router'
import {BrandInterface} from '../../../handlers/data/brand.interface'
import {environment} from '../../../../environments/environment'
import {MetaDataService} from '../../../handlers/meta-data/meta-data.service'

@Component({
    templateUrl: './catalog-filter.html',
    selector: 'app-catalog-filter',
    styles: [`
        .filter-headline mat-icon {
            font-size: inherit;
        }

        .my-radio-group {
            display: flex;
            flex-direction: column;
            margin: 15px 0;
        }

        .my-radio-button {
            margin: 5px;
        }
    `]
})
export class CatalogFilterComponent implements OnInit, OnDestroy {
    @Input() formInitialValue: any
    @Input() selectedBrands: string[] = []

    selectedBrandsLocal: string[] = []

    form: FormGroup = new FormGroup({
        /*
        * accumulators - аккумуляторы
        * ups - ибп
        * */
        productType: new FormControl(),
        /*
          технология
        * stationary - стационарные
        * draft - тяговые
        * */
        accumulatorType: new FormControl(),
        /*
        * agm, gel, electrolyte
        * */
        accumulatorTechnology: new FormControl(),
        /*
        * Напряжение
        * */
        accumulatorVoltage: new FormControl(),
        /*
        * Емкость
        * */
        capacityMin: new FormControl(null, [Validators.pattern('[0-9.]*')]),
        capacityMax: new FormControl(null, [Validators.pattern('[0-9.]*')]),
        /*
        * Срок службы
        * */
        lifeTimeMin: new FormControl(),
        lifeTimeMax: new FormControl(),
        /*
        * Количество циклов
        * */
        numberOfCyclesMin: new FormControl(),
        numberOfCyclesMax: new FormControl(),
        /*
        * Бренды
        * */
        brands: new FormControl([]),
    })

    brands: BrandInterface[] = []
    filteredBrands: BrandInterface[] = []
    filteredBrands1: BrandInterface[] = []
    filteredBrands2: BrandInterface[] = []
    filteredBrands3: BrandInterface[] = []
    filteredBrands4: BrandInterface[] = []

    selectedVoltage: any

    url = environment.imgUrl
    sub: Subscription = new Subscription()

    constructor(
        public data: DataService,
        private router: Router,
        private md: MetaDataService
    ) {
    }

    ngOnInit(): void {
        // Get list brands for show brands in filter
        this.sub.add(this.data.brandsData.subscribe(r => r ? this.brands = r : null))
        // Set form state, formInitialValue is data from url
        if (this.formInitialValue) this.form.patchValue(this.formInitialValue)
        if (this.selectedBrands.length > 0) this.selectedBrandsLocal = this.selectedBrands
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }


    show(): void {
        this.form.markAllAsTouched()
        if (this.form.invalid) return

        if (this.form.controls.productType.value !== 'accumulators') {
            this.form.controls.accumulatorType.reset()
            this.form.controls.accumulatorTechnology.reset()
            this.form.controls.accumulatorVoltage.reset()
            this.form.controls.lifeTimeMax.reset()
            this.form.controls.numberOfCyclesMax.reset()
        } else if (this.form.controls.productType.value === 'accumulators') {
            if (this.form.controls.accumulatorType.value !== 'stationary') {
                this.form.controls.lifeTimeMax.reset()
            } else if (this.form.controls.accumulatorType.value !== 'draft') {
                this.form.controls.numberOfCyclesMax.reset()
            }
        }

        this.showFilteredBrands()

        this.form.controls.brands.patchValue(this.selectedBrandsLocal)

        this.router.navigate(['/catalog'], {
            queryParams: this.form.value
        })
    }

    clear(): void {
        this.selectedBrandsLocal = []
        this.selectedVoltage = ''
        this.filteredBrands = []
        this.router.navigate(['/catalog'], {
            queryParams: {productType: 'accumulators'}
        })
    }

    isBrandSelected(title: string): string {
        return this.selectedBrandsLocal.find(i => i === title) ? 'primary' : null
    }

    toggleBrandSelection(title: string): boolean {
        const index = this.selectedBrandsLocal.findIndex(i => i === title)

        // больше или равно нулю
        if (index >= 0) {
            this.selectedBrandsLocal.splice(index, 1)
            return false
        } else {
            this.selectedBrandsLocal.push(title)
            return true
        }
    }

    showFilteredBrands(): void {
        // если выбран тип продукта - ищем, есть ли он в массиве со всеми брендами
        // если есть, то кладем в filteredBrands1 для дальнейших фильтраций
        if (this.form.controls.productType.value) {
            if (this.brands.filter(i => i.producttype.includes(this.form.controls.productType.value)))
                this.filteredBrands1 = this.brands.filter(i => i.producttype
                    .includes(this.form.controls.productType.value))
            this.filteredBrands = this.filteredBrands1
        }
        // передаем результат в filteredBrands на случай, если следующие условия не должны работать
        // если следующие условия не срабатывают - выводим filteredBrands

        if (this.form.controls.accumulatorType.value) {
            if (this.brands.filter(i => i.accumulatortype.includes(this.form.controls.accumulatorType.value)))
                this.filteredBrands2 = this.filteredBrands1.filter(i => i.accumulatortype
                    .includes(this.form.controls.accumulatorType.value))
            this.filteredBrands = this.filteredBrands2
        }


        if (this.form.controls.accumulatorTechnology.value) {
            if (this.brands.filter(i => i.accumulatortechnology.includes(this.form.controls.accumulatorTechnology.value)))
                this.filteredBrands3 = this.filteredBrands2.filter(i => i.accumulatortechnology
                    .includes(this.form.controls.accumulatorTechnology.value))
            this.filteredBrands = this.filteredBrands3
        }


        if (this.form.controls.accumulatorVoltage.value) {
            if (this.brands.filter(i => i.accumulatorvoltage.includes(this.form.controls.accumulatorVoltage.value)))
                this.filteredBrands4 = this.filteredBrands3.filter(i => i.accumulatorvoltage
                    .includes(this.selectedVoltage))
            this.filteredBrands = this.filteredBrands4
        }
    }

    // filterBrandsAction(item: BrandInterface) {
    //     if (this.form.controls.accumulatorVoltage.value &&
    //         item.accumulatorVoltage.filter(i => i === this.form.controls.accumulatorVoltage.value)) {
    //
    //         console.log(this.filteredBrands)
    //     }
    // }

    clickToFilter(): void {
        this.md.setGTMCustomEvent('filterSubmit')
    }
}
