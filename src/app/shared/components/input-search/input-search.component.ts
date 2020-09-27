import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSearchComponent implements OnInit, OnDestroy {
  @Input() label = 'search';
  @Output() newSearch = new EventEmitter<string>();
  subscription: Subscription;
  inputSearch: FormControl;
  constructor() {
    this.inputSearch = new FormControl('');
  }

  ngOnInit(): void {
    this.subscription = this.inputSearch.valueChanges
    .pipe(debounceTime(700))
      .subscribe(newValue => {
        this.newSearch.emit(newValue);
      });
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

}
