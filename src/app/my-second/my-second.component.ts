import { Component } from '@angular/core';

@Component({
  selector: 'app-my-second',
  template: `<p
      ngClass="paragraph"
      [ngStyle]="{ 'font-weight': 'bold' }"
      (click)="toggleColor()"
    >
      my-second works! by <span [style.color]="textColor">{{ userName }} </span>
      <img [src]="urlPath" alt="Flying V guitar" />
    </p>
    <form for="userName"></form>
    <input
      id="userName"
      [(ngModel)]="userName"
      name="userName"
      placeholder="Enter your name"
    />
    <button (click)="submit()" type="button" [attr.aria-label]="attributValue">
      Exemple Button
    </button> `,
  styles: ['.paragraph { color: blue; }'],
})
export class MySecondComponent {
  public userName = 'Darkheadbanger';
  public urlPath = `https://images.reverb.com/image/upload/s--7BYDbrCn--/t_card-square/v1640300451/r8ixyuhycawcnaduxkcn.jpg`;
  public textColor: string = 'red';

  public attributValue = 'Button-exemple';

  submit() {
    alert('hi');
  }

  toggleColor() {
    console.log('Clicked');
  }
}

// créer un composant  my-second , avec. un template <div></div>
// voir module pour déclaréer  le composant
// ajout de l'interpolation et ajout de style dans le composant | Fait

// afficher dans. my-second.  l'ensemble de ces interpolation
// L’interpolation
// a faire pour demain
// - La liaison d’événement (event binding) (click)
// - La liaison de classe (class binding) *ngClass
// - La liaison de style (style binding) [ngStyle]
// - La liaison de propriété (property binding)[src] ="urlPath"
// - La liaison d’attribut (attribute binding) [attr.aria-label]
// - La liaison de données dans les deux sens (two-way data binding) ngModel
