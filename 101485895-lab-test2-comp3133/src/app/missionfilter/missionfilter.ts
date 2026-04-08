import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  standalone: false,
  templateUrl: './missionfilter.html',
  styleUrls: ['./missionfilter.css']
})
export class Missionfilter {
  year: string = '';

  @Output() yearSelected = new EventEmitter<string>();
  @Output() clearFilter = new EventEmitter<void>();

  onSearch(): void {
    this.yearSelected.emit(this.year);
  }

  onClear(): void {
    this.year = '';
    this.clearFilter.emit();
  }
}