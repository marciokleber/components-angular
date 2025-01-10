import { Component } from '@angular/core';
import { StandardHeaderComponent } from '../core/layout/standard-header/standard-header.component';

@Component({
  selector: 'app-root',
  imports: [StandardHeaderComponent],
  template: `<app-standard-header/>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'components-angular';
}
