import {BrowserModule} from '@angular/platform-browser'
import {LOCALE_ID, NgModule} from '@angular/core'
import {AppRoutingModule} from './app-routing.module'
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {AppComponent} from './app.component'
import {HeaderModule} from './atomic/blocks/header/header.module'
import {FooterModule} from './atomic/blocks/footer/footer.module'

import {registerLocaleData} from '@angular/common'
import localeRu from '@angular/common/locales/ru'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MainMobileMenuModule} from './atomic/elements/menu/main-mobile/main-mobile-menu.module'
import {ScrollLockModule} from './handlers/scroll-lock/scroll-lock.module'
import {Angulartics2Module} from 'angulartics2'

registerLocaleData(localeRu, 'ru')

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        HeaderModule,
        FooterModule,
        MatSidenavModule,
        MainMobileMenuModule,
        ScrollLockModule,
        Angulartics2Module.forRoot(),
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'ru'},
        {provide: 'googleTagManagerId', useValue: 'GTM-TZS6PB5'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
