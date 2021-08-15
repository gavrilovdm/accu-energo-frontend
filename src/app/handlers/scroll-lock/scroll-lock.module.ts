import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ScrollLockComponent } from './scroll-lock'

@NgModule({
  imports: [CommonModule],
  declarations: [ScrollLockComponent],
  exports: [ScrollLockComponent]
})
export class ScrollLockModule { }
