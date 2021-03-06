import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SharedState } from './Model/shared.state.interface';
import { getAside, getLoading } from './state/sharedstate/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  loading$: Observable<boolean>;
  aside$: Observable<boolean>;

  title = 'Frontend';

  get_Loading() {
    this.loading$ = this.store.select(getLoading);
    this.aside$ = this.store.select(getAside);
  }

  ngOnInit() {
    this.get_Loading();
  }
}
