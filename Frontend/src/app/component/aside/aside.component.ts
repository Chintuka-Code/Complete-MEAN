import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { aside } from 'src/app/state/sharedstate/shared.action';
import { getAside } from 'src/app/state/sharedstate/shared.selector';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  aside$: Observable<boolean>;
  constructor(private store: Store) {}

  get_aside() {
    this.aside$ = this.store.select(getAside);
  }

  hide_aside() {
    this.store.dispatch(aside());
  }

  ngOnInit(): void {
    this.get_aside();
  }
}
