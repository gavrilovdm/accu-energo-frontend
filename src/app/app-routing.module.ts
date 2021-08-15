import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/p-home/p-home.module')
      .then(mod => mod.PHomeModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about/p-about/p-about.module')
      .then(mod => mod.PAboutModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/about/p-team/p-team.module')
      .then(mod => mod.PTeamModule)
  },
  {
    path: 'partners',
    loadChildren: () => import('./pages/about/p-partners/p-partners.module')
      .then(mod => mod.PPartnersModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/p-services/p-services.module')
      .then(mod => mod.PServicesModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./pages/p-docs/p-docs.module')
      .then(mod => mod.PDocsModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/p-news/p-news.module')
      .then(mod => mod.PNewsModule)
  },
  {
    path: 'news/:url',
    loadChildren: () => import('./pages/news/p-news-single/p-news-single.module')
      .then(mod => mod.PNewsSingleModule)
  },
  {
    path: 'webinars',
    loadChildren: () => import('./pages/webinars/p-webinars/p-webinars.module')
      .then(mod => mod.PWebinarsModule)
  },
  {
    path: 'webinars/:url',
    loadChildren: () => import('./pages/webinars/p-webinar/p-webinar.module')
      .then(mod => mod.PWebinarModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/p-contacts/p-contacts.module')
      .then(mod => mod.PContactsModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./pages/catalog/list/catalog-list.module')
      .then(mod => mod.CatalogListModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module')
      .then(mod => mod.PrivacyPolicyModule)
  },
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
