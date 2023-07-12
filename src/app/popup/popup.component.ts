import { Component, OnInit } from '@angular/core';
import { Store,Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PopSelector } from './store/popup.selector';
import { GetCategory } from './store/popup.actions';

interface PopupState {
  categories: string[];
}

const initPopupState: PopupState = {
  categories: []
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  showPopup = false;
  @Select(PopSelector.category) categories$!: Observable<string[] | undefined>;
  options: string[] = [];

  constructor(private store: Store) {}

  ngOnInit() {
    this.categories$.pipe(
      tap((category) => {
        this.options = category || [];
      })
    ).subscribe();
  }

  openPopup() {
    this.showPopup = true;
    this.store.dispatch(new GetCategory())
  }

  closePopup() {
    this.showPopup = false;
  }
}
