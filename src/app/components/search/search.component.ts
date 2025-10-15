import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true
})
export class SearchComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  @Output() public emmitClear: EventEmitter<void> = new EventEmitter();

  public search(value: string) {
    this.emmitSearch.emit(value);
  }

  public clearSearch(input: HTMLInputElement) {
    input.value = '';
    this.emmitClear.emit();
  }
}