import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-home',
  imports: [MatListModule,DragDropModule, CommonModule,MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.typesOfShoes, event.previousIndex, event.currentIndex);
    console.log(this.typesOfShoes)
  }

}
