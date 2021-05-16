import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SharedState } from './Model/shared.state.interface';
import { getLoading } from './state/sharedstate/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<{ shared: SharedState }>) {}

  loading$: Observable<boolean>;

  get_Loading() {
    this.loading$ = this.store.select(getLoading);
  }

  title = 'Frontend';

  ngOnInit() {
    this.get_Loading();
  }
}
