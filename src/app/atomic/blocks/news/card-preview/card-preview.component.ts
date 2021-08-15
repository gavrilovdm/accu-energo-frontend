import {Component, Input} from '@angular/core'
import {NewInterface} from '../../../../handlers/data/new.interface'
import {environment} from '../../../../../environments/environment'

@Component({
  template: `
    <mat-card class="card p-0 d-flex align-items-end mb-3"
              [style.backgroundImage]="'url('+url + item.image+')'"
              [routerLink]="'/news/'+item.url"
              app-elevation
              *ngIf="item">
      <mat-card-content class="card-content p-2 pt-5 pb-3 w-100">
        <div class="nowrap d-flex align-items-center mb-2 mat-body-strong">
          <mat-icon class="mr-1" inline>date_range</mat-icon>
          {{item.date | date: 'longDate' : '+0000'}}
        </div>
        {{item.title}}
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .card {
      min-height: 250px;
      background-size: cover;
      background-position: center;
      cursor: pointer;
      transition: 400ms ease-in-out;
    }

    .card-content {
      background-image: linear-gradient(to bottom, transparent 0%, black 100%);
      color: white;
      padding-top: 23%;
      line-height: 1.2;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  `],
  selector: 'app-card-preview'
})
export class CardPreviewComponent {
  url: string = environment.imgUrl
  @Input() item!: NewInterface
}
