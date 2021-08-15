import { Component, OnInit } from '@angular/core'
import { MetaDataService } from 'src/app/handlers/meta-data/meta-data.service'

@Component({
  templateUrl: './p-home.html'
})
export class PHomeComponent implements OnInit {
  title = 'Главная'
  description = 'Компания работает на рынке Республики Казахстан с 2004 года и является структурным подразделением российской компании ООО «Акку-Фертриб»'

  constructor(private md: MetaDataService) { }

  ngOnInit(): void {
    this.md.setMetaData({ title: this.title, description: this.description })
  }
}
