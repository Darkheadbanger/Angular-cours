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

// demain


// - Qu’est-ce qu’un composant Angular
// - Comment une application Angular démarre
// - Qu’est-ce qu’un module Angular
// - Comment déclarer des templates et des styles
// repondre a " C'est quoi Angular CLI"
// C'est quoi les metadonées

// regarder les fichier : main.ts , app.ts, index.html
// Module, appModule c'est quoi
