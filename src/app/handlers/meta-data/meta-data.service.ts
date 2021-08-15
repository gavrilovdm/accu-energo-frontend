import {Injectable} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {MetaDataInterface} from './meta-data.interface'
import {Angulartics2GoogleTagManager} from 'angulartics2/gtm'
import {GoogleTagManagerService} from 'angular-google-tag-manager'
import {NavigationEnd, Router} from '@angular/router'

@Injectable({providedIn: 'root'})
export class MetaDataService {
    constructor(private title: Title,
                private meta: Meta,
                private router: Router,
                private gtm: Angulartics2GoogleTagManager,
                private gtmService: GoogleTagManagerService
    ) {
    }

    setMetaData(md?: MetaDataInterface) {
        const url = 'https://accu-energo.kz'

        // title and description
        this.title.setTitle(md.title + ' | АККУ-ЭНЕРГО')
        this.meta.updateTag({name: 'description', content: md.description})

        // OG tags
        this.meta.updateTag({property: 'og:url', content: url})
        this.meta.updateTag({property: 'og:site_name', content: md.title})
        this.meta.updateTag({property: 'og:title', content: md.title})
        this.meta.updateTag({property: 'og:description', content: md.description})

        // Other
        this.meta.updateTag({name: 'title', content: md.title})
    }

    // Track event to Google Tag Manager
    // It is exactly works when category, label and event has one name
    setGTMCustomEvent(event: string, category?: string, label?: string): void {
        // push GTM data layer with a custom event
        const gtmTag = {
            event,
            category,
            label
        }
        this.gtmService.pushTag(gtmTag)
    }
}
