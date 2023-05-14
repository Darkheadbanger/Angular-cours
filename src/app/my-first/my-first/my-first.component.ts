import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss'],
})
export class MyFirstComponent {
  public isFirst = true;
  public first = 'first';
  public second = 'second';

  public firstoOrSecond(e: Event) {
    e.preventDefault();
    console.info('first');
    let seconFirst = this.first ? 'second' : 'first';
    return seconFirst;
  }
}

// Donc, en gros j'ai un h1 dans ce h1 j'ai un mot qui change en fonction du clique.
// J'ai touours ce h1 avec le même mot, la couleur change en fonction du mot. Que deux mots. Au clique. Le mot change et la couleur change
// Directive qui permet de faire ca

// demain

// <!-- <div>
//   <p>coucou<span [ngClass]="toggle = red : blue" (click)="toggle()">{{toogle ? parent.papa : parent.maman}}</span></p>
// </div> -->

// créer un composant  my-second , avec. un template <div></div>
// voir module pour déclaréer  le composant
// ajout de l'interpolation et ajout de style dans le composant

// Type Script. , c'est quoi un décorateur et me faire. un exercice avec 3 utilisation d'un meme décorateur personalisé

// afficher dans. my-second.  l'ensemble de ces interpolation
// L’interpolation
// a faire pour demain
// - La liaison d’événement (event binding)
// - La liaison de classe (class binding)
// - La liaison de style (style binding)
// - La liaison de propriété (property binding)

// - La liaison d’attribut (attribute binding)
// - La liaison de données dans les deux sens (two-way data binding)

// - Qu’est-ce qu’un composant Angular
// - Comment une application Angular démarre
// - Qu’est-ce qu’un module Angular
// - Comment déclarer des templates et des styles
// repondre a " C'est quoi Angular CLI"

// regarder les fichier : main.ts , app.ts, index.html
// Module, appModule c'est quoi
