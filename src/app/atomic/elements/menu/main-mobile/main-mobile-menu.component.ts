import {Component, EventEmitter, Output} from '@angular/core'

@Component({
    template: `
        <mat-nav-list>
            <a mat-list-item routerLink="/"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: true}"
               (click)="clickMenuBtn()">Главная</a>
            <mat-list-item (click)="isShowAbout = !isShowAbout">
                <div class="d-flex justify-content-between align-items-center w-100">
                    О компании
                    <mat-icon class="submenu-mobile-button" [ngClass]="{'rotated' : isShowAbout}">
                        expand_more
                    </mat-icon>
                </div>
            </mat-list-item>
            <div class="submenu-mobile" [ngClass]="{'expanded' : isShowAbout}">
                <mat-nav-list>
                    <mat-list-item routerLink="/about-us" (click)="clickMenuBtn(); isShowAbout = !isShowAbout">
                        О нас
                    </mat-list-item>
                    <mat-list-item routerLink="/team" (click)="clickMenuBtn(); isShowAbout = !isShowAbout">
                        Наша команда
                    </mat-list-item>
                    <mat-list-item routerLink="/partners" (click)="clickMenuBtn(); isShowAbout = !isShowAbout">
                        Наши партнеры
                    </mat-list-item>
                </mat-nav-list>
            </div>
            <a mat-list-item routerLink="/catalog"
               routerLinkActive="active"
               (click)="clickMenuBtn()">Продукция</a>
            <a mat-list-item routerLink="/news"
               routerLinkActive="active"
               (click)="clickMenuBtn()">Новости</a>
            <a mat-list-item routerLink="/services"
               routerLinkActive="active"
               (click)="clickMenuBtn()">Услуги</a>
            <a mat-list-item routerLink="/docs"
               routerLinkActive="active"
               (click)="clickMenuBtn()">Документация</a>
            <a mat-list-item routerLink="/webinars"
               routerLinkActive="active"
               (click)="clickMenuBtn()">Вебинары</a>
            <a mat-list-item routerLink="/contacts"
               routerLinkActive="active"
               (click)="clickMenuBtn()">Контакты</a>
        </mat-nav-list>
    `,
    styles: [`
        mat-sidenav-container {
            position: absolute;
            right: 0;
            left: 0;
            bottom: 0;
            top: 0;
        }

        mat-sidenav {
            min-width: 80vw;
        }

        /* Mat nav-list in main menu (mobile) */
        .submenu-mobile-button {
            transition: 300ms ease-in-out;
            transform: rotate(0deg);
        }

        .submenu-mobile-button.rotated {
            transform: rotate(180deg);
        }

        .submenu-mobile {
            overflow-y: hidden;
            transition: 300ms ease-in-out;
            height: 0;
        }

        .submenu-mobile.expanded {
            height: auto;
            transition: 300ms ease-in-out;
        }
    `],
    selector: 'app-main-mobile-menu'
})

export class MainMobileMenuComponent {
    @Output() needCloseMobileMenu: EventEmitter<boolean> = new EventEmitter<boolean>()

    isShowAbout

    clickMenuBtn(): void {
        this.needCloseMobileMenu.emit(false)
    }
}
