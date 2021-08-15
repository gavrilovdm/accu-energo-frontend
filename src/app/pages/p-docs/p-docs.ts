import {Component, OnDestroy, OnInit} from '@angular/core'
import {MetaDataService} from '../../handlers/meta-data/meta-data.service'
import {PDocsService} from './p-docs.service'
import {ActivatedRoute} from '@angular/router'
import {Subscription} from 'rxjs'
import {DocumentInterface} from './document.interface'
import {environment} from '../../../environments/environment'

@Component({
    templateUrl: './p-docs.html',
    providers: [PDocsService]
})
export class PDocsComponent implements OnInit, OnDestroy {
    title = `Документация`
    description = `Официальный представитель и эксклюзивный дистрибьютор концерна Exide-Technologies на территории Республики Казахстан`

    url = environment.imgUrl
    icCategory: boolean
    items: DocumentInterface[] = []

    sub: Subscription = new Subscription()

    constructor(
        private md: MetaDataService,
        private data: PDocsService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.sub.add(
            this.route.params.subscribe(params => {
                if (!params.category) {
                    this.icCategory = false
                    this.items = []
                    return
                }
                this.icCategory = true
                this.load(params.category)
            })
        )

        this.md.setMetaData({title: this.title, description: this.description})
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }

    load(category: string): void {
        this.items = this.data.getItems(category)
    }

    clickToDocument(): void {
        this.md.setGTMCustomEvent('openDocument')
    }
}
