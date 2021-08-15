import {AfterViewInit, Component, EventEmitter, HostBinding, Inject, OnDestroy, Output, PLATFORM_ID} from '@angular/core'
import {fromEvent, Subscription} from 'rxjs'
import {distinctUntilChanged, filter, map, pairwise, share, throttleTime} from 'rxjs/operators'
import {animate, state, style, transition, trigger} from '@angular/animations'
import {isPlatformBrowser} from '@angular/common'
import {BreakpointObserver} from '@angular/cdk/layout'
import {MetaDataService} from '../../../handlers/meta-data/meta-data.service'

enum Direction {Up = 'Up', Down = 'Down'}

enum VisibilityState {Visible = 'visible', Hidden = 'hidden'}

@Component({
    templateUrl: './header.html',
    selector: 'app-header',
    styles: [`
        .mat-toolbar {
            background: #fafafa;
        }
        
        :host {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 2;
        }

        img.logo {
            max-height: 50px;
        }

        .city-icon {
            width: auto !important;
        }

        
        
        .top-menu a:hover {
            color: #757575;
        }
        
        .top-menu-phones {
            color: black!important;
        }
    `],
    animations: [
        trigger('toggle', [
            state(
                VisibilityState.Hidden,
                style({opacity: 0, transform: 'translateY(-100%)'})
            ),
            state(
                VisibilityState.Visible,
                style({opacity: 1, transform: 'translateY(0)'})
            ),
            transition('* => *', animate('200ms ease-in'))
        ])
    ]
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
    isMobile: boolean

    // trigger click button menu
    @Output() needShowMobileMenu: EventEmitter<boolean> = new EventEmitter<boolean>()

    // header showing
    private isVisible = true

    @HostBinding('@toggle')
    get toggle(): VisibilityState {
        return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden
    }

    sub: Subscription = new Subscription()

    constructor(
        @Inject(PLATFORM_ID) private platformId: object,
        private breakpointObs: BreakpointObserver,
        private md: MetaDataService,
    ) {
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.headerShowing()
            setTimeout(() => {
                /*
                * Check is mobile
                * */
                this.breakpointObs
                    .observe('(max-width: 991px)')
                    .subscribe(r => r.matches ? this.isMobile = true : this.isMobile = false)
            }, 0)
        }
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }

    headerShowing(): void {
        const scroll$ = fromEvent(window, 'scroll').pipe(
            throttleTime(10),
            map(() => window.pageYOffset),
            pairwise(),
            map(([y1, y2]): Direction => y1 < 80 || y2 < 80 || y2 < y1 ? Direction.Up : Direction.Down),
            distinctUntilChanged(),
            share()
        )

        const scrollUp$ = scroll$.pipe(filter(i => i === Direction.Up))
        const scrollDown$ = scroll$.pipe(filter(i => i === Direction.Down))

        this.sub.add(scrollUp$.subscribe(() => this.isVisible = true))
        this.sub.add(scrollDown$.subscribe(() => this.isVisible = false))
    }

    clickMenuBtn(): void {
        this.needShowMobileMenu.emit(true)
    }

    clickToPhone(): void {
        this.md.setGTMCustomEvent('phoneClick')
    }
}
