import {Component, Input} from '@angular/core'

@Component({
  templateUrl: './load-informer.html',
  selector: 'app-load-informer',
  styleUrls: ['./load-informer.css']
})

export class ELoadInformerCmp {
  @Input() show: boolean
}
