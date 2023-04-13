import { Component } from '@angular/core';

interface ElementData {
    position: number;
    name: string;
    weight: number;
    symbol: string;
    editing: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  debounceTime = 500;
  canToggle = true;

  dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.81, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.011, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.007, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.999, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.998, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.18, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.99, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.982, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.085, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.974, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.06, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.45, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.098, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  ].map(element => ({ ...element, editing: false }));

  toggleEdit(element: ElementData) {
    if (!this.canToggle) {
      return;
    }
    element.editing = !element.editing;
    this.canToggle = false;

    setTimeout(() => {
      this.canToggle = true;
    }, this.debounceTime);
  }

  handleKeyPress(element: ElementData) {
    this.toggleEdit(element);
  }

  trackByPosition(index: number, element: ElementData): number {
      return element.position;
  }
}