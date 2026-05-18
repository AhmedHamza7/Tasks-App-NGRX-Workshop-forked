import { Component, input, output } from '@angular/core';
import { TaskFilter } from '../../task.model';

@Component({
  selector: 'app-filter-button',
  imports: [],
  templateUrl: './filter-button.html',
  styleUrl: './filter-button.scss',
})
export class FilterButton {
  filter = input.required<TaskFilter>();
  label = input.required<string>();
  filterClick = output<TaskFilter>();

  onClick() {
    this.filterClick.emit(this.filter());
  }
}
