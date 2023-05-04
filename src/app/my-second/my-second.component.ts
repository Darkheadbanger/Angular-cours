import { Component } from '@angular/core';

@Component({
  selector: 'app-my-second',
  template: `<p
    ngClass="name"
    [ngStyle]="{ 'font-weight': 'bold' }"
    (click)="toggleColor($event)"
  >
    my-second works! by {{ name }}
    <img alt="Flying V guitar" />
  </p>`,
  styles: ['.name { color: blue; }'],
})
export class MySecondComponent {
  public name = 'David';
  public urlPath = `https://images.reverb.com/image/upload/s--7BYDbrCn--/t_card-square/v1640300451/r8ixyuhycawcnaduxkcn.jpg`;

  toggleColor(e: Event) {
    e.preventDefault();
    console.log(e);
  }
}
