import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { aside } from 'src/app/state/sharedstate/shared.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store) {}

  show_aside() {
    this.store.dispatch(aside());
  }

  ngOnInit(): void {}
}
