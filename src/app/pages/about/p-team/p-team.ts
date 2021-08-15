import {Component, OnInit} from '@angular/core'
import {DataService} from '../../../handlers/data/data.service'
import {MetaDataService} from '../../../handlers/meta-data/meta-data.service'

@Component({
  templateUrl: './p-team.html'
})
export class PTeamComponent implements OnInit {
  title = `Наша команда`
  description = `Залог успеха нашей компании – команда настоящих профессионалов`

  constructor(
    private md: MetaDataService,
    public data: DataService
  ) {
  }

  ngOnInit(): void {
    if (this.data.teamData.length < 1) this.data.teamDownload()
    this.md.setMetaData({ title: this.title, description: this.description })
  }
}
