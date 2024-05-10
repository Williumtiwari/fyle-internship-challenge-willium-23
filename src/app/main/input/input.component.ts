import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Output() searchResult = new EventEmitter<any>();

  username: string = '';

  /**
   * @brief Emits the search result to the parent component.
   */
  emitSearchResult(): void {
    this.searchResult.emit({
      username: this.username,
    });
  }
}
