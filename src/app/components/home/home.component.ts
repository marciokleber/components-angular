import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-home',
  imports: [MatListModule,DragDropModule, CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  nomes: string[] = ['Maria', 'Luisa', 'Lameirao', 'luisaxsz'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.nomes, event.previousIndex, event.currentIndex);
    console.table(this.nomes.map((nome) => ({ Nome: nome })));
  }

  add() {
    this.nomes = [...this.nomes, "test"];
    console.table(this.nomes.map((nome) => ({ Nome: nome })));
  }

}
