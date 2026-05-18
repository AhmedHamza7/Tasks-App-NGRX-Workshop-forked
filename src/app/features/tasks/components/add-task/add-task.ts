import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TaskActions from '../../store/tasks.actions';
@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {
  private _store = inject(Store);

  form = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  submit() {
    if (this.form.valid) {
      this._store.dispatch(TaskActions.createTask(
        { 
          task: { 
          title: this.form.value.title as string, 
          completed: false,
          user: '123'
        } 
      }
      ));
      this.form.reset();
    }
  }
}
