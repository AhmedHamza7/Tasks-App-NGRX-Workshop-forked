import { Component, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskFilter } from '../../task.model';
import * as TaskActions from '../../store/tasks.actions';
import { FilterButton } from '../filter-button/filter-button';

export interface FilterOption {
  filter: TaskFilter;
  label: string;
}

@Component({
  selector: 'app-filter-buttons-group',
  imports: [FilterButton],
  templateUrl: './filter-buttons-group.html',
  styleUrl: './filter-buttons-group.scss',
})
export class FilterButtonsGroup {
  private _store = inject(Store);

  filters = input<FilterOption[]>([
    { filter: 'all', label: 'All' },
    { filter: 'pending', label: 'Pending' },
    { filter: 'completed', label: 'Completed' },
  ]);

  setFilter(filter: TaskFilter) {
    this._store.dispatch(TaskActions.setFilter({ filter }));
  }
}
