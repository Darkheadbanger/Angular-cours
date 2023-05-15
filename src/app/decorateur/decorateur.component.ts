import { Component, VERSION } from '@angular/core';

@simpleDecorator
@Component({
  selector: 'app-decorateur',
  templateUrl: './decorateur.component.html',
  styleUrls: ['./decorateur.component.scss'],
})
export class DecorateurComponent {
  name = 'Angular' + VERSION.full;

  constructor() {
    console.log('Hello from class constructor');
  }

  ngOnInit() {
    console.log((this as any).value1);
    console.log((this as any).value2);
  }
}

function simpleDecorator(target: Function) {
  console.log('Hello from Decorator');

  Object.defineProperty(target.prototype, 'value1', {
    value: 100,
    writable: false,
  });
  Object.defineProperty(target.prototype, 'value2', {
    value: 200,
    writable: false,
  });
}

// Type Script. , c'est quoi un décorateur et me faire.
// un exercice avec 3 utilisation d'un meme décorateur personalisé

/* En Angular, basé sur le typescript, un décorateur est une fonction spéciale attaché dans des classes,
des méthodes, des propriétés et de paramètres. Ils sont utilisé pour ajouter, modifier ou manipuler les informations suplementaires
qui sont attachés sur tous ce que j'ai dis en haut. Angular utilise pluisieurs décorateur intégrées comme @component,
@injectable, @inpuit, etc.*/

/***/
