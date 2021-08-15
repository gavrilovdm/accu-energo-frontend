import {Component, OnInit} from '@angular/core'
import {MetaDataService} from '../../../handlers/meta-data/meta-data.service'
import {Router} from '@angular/router'
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common'

@Component({
  templateUrl: './p-about.html',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class PAboutComponent implements OnInit {
  title = `О нас`
  description = `ТОО «Акку-Энерго» имеет опыт в реализации крупных проектов «под ключ» в области
                  электроэнергетики, нефтегазовой отрасли, области телекоммуникаций и осуществляет
                  поставку и пусконаладку оборудования систем оперативного постоянного тока включая
                  аккумуляторные батареи и весь спектр преобразовательного и электрощитового
                  оборудования.`


  constructor(
    private md: MetaDataService,
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.md.setMetaData({ title: this.title, description: this.description })
  }

  getCurrentPath() {
    console.log(this.location.path())
  }

  GoForward() {
    this.location.forward()
  }

  GoBack() {
    this.location.back()
  }

}


