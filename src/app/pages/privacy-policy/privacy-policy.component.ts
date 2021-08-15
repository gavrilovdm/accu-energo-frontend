import {Component, OnInit} from '@angular/core'
import {MetaDataService} from '../../handlers/meta-data/meta-data.service'
import {DataService} from '../../handlers/data/data.service'

@Component({
  templateUrl: './privacy-policy.html',
  })

export class PrivacyPolicyComponent implements OnInit {
  constructor(
    private md: MetaDataService,
    public data: DataService
  ) {
  }

  ngOnInit(): void {
    this.md.setMetaData({
      title: 'Политика конфиденциальности',
      description: 'Ваши данные не будут переданы третьим лицам',
    })
  }
}
