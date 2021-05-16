import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loading } from 'src/app/state/sharedstate/shared.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  loading() {
    this.store.dispatch(loading({ spinner: true }));
  }

  ngOnInit(): void {}
}
