import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss'],
})
export class MyFirstComponent {
  public states: { [key in 'isFirst1' | 'isFirst2']: boolean } = {
    isFirst1: true,
    isFirst2: true,
  };

  public firstOrSecond(key: 'isFirst1' | 'isFirst2', e: Event) {
    e.preventDefault();
    this.states[key] = !this.states[key];
  }
}
