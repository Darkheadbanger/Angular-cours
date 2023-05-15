import { Component } from '@angular/core';
// Changer le texte et le couleur qui dépends du texte

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

// - Qu’est-ce qu’un composant Angular
// - Comment une application Angular démarre
// regarder les fichier : main.ts , app.ts, index.html
// - Qu’est-ce qu’un module Angular, appModule
// - Comment déclarer des templates et des styles
// repondre a " C'est quoi Angular CLI"
// C'est quoi les metadonées