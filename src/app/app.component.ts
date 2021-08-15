import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core'
import {DataService} from './handlers/data/data.service'
import {MatSidenav} from '@angular/material/sidenav'
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common'
import {NavigationEnd, Router} from '@angular/router'
import {GoogleTagManagerService} from 'angular-google-tag-manager'

@Component({
    selector: 'app-root',
    template: `
        <app-header (needShowMobileMenu)="sidenav.open()"></app-header>
        <mat-sidenav-container autosize>
            <mat-sidenav #sidenav
                         mode="over"
                         fixedInViewport
                         [autoFocus]="false"
                         (closed)="isMenuOpen = false"
                         (opened)="isMenuOpen = true">
                <div class="d-flex align-items-center h-100 flex-row pl-3"
                     style="width: 80vw;">
                    <app-main-mobile-menu (needCloseMobileMenu)="sidenav.close()"></app-main-mobile-menu>
                </div>
            </mat-sidenav>
            <mat-sidenav-content>
                <router-outlet></router-outlet>
            </mat-sidenav-content>
        </mat-sidenav-container>
        <app-footer></app-footer>
        <app-scroll-lock *ngIf="isMenuOpen"></app-scroll-lock>
    `,
    providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent implements OnInit {
    @ViewChild('sidenav') private sidenav: MatSidenav

    isMenuOpen: boolean

    baseURL: boolean

    constructor(
        private data: DataService,
        private location: Location,
        private router: Router,
        private gtmService: GoogleTagManagerService
    ) {
    }

    ngOnInit(): void {
        this.data.brandsDownload()

        this.router.events.subscribe(event => {
            // console.log(this.location.path())
            // this.data.getUrl()
        })

        this.router.events.forEach(item => {
            if (item instanceof NavigationEnd) {
                const gtmTag = {
                    event: 'pageView',
                    pageName: item.url
                }
                this.gtmService.pushTag(gtmTag)
            }
        })
    }
}
