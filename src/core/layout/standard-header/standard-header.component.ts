import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-standard-header',
  imports: [MatIconModule,MatButtonModule,MatToolbarModule,MatSidenavModule, RouterOutlet,CommonModule],
  templateUrl: './standard-header.component.html',
  styleUrl: './standard-header.component.scss'
})
export class StandardHeaderComponent {

  showFiller = false;

}
