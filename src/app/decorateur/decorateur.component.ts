import { Component, VERSION } from '@angular/core';

// @simpleDecorator // Decorateur simple
@simpleDecorator1({
  // decorateur avec des arguments
  value3: 300,
  value4: 400,
})
@angularAlert({ alert: 'Hi I am Decorator' })
@Component({
  selector: 'app-decorateur',
  templateUrl: './decorateur.component.html',
  styleUrls: ['./decorateur.component.scss'],
})
export class DecorateurComponent {
  name = 'Angular' + VERSION.full;

  value1?: number;
  value2?: number;
  alert?: string;

  constructor() {
    console.log('Hello from class constructor');
  }

  angularClicakble() {
    alert(`${this.alert}`);
    console.log(this.alert);
  }

  ngOnInit() {
    console.log(this.value1);
    console.log(this.value2);
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
function simpleDecorator1(args: { value3: number; value4: number }) {
  console.log(`Hi ${args}`);

  return function (target: Function) {
    console.log('Hello from Decorator1');
    console.log(typeof target);
    console.log(target);

    Object.defineProperty(target.prototype, 'value3', {
      value: args.value3,
      writable: false,
    });
    Object.defineProperty(target.prototype, 'value4', {
      value: args.value4,
      writable: false,
    });
  };
}
function angularAlert(args: { alert: string }) {
  console.log(`Hi ${args}`);

  return function (target: Function) {
    console.log('Hello from alert Decorator');
    console.log(typeof target);
    console.log(target);

    Object.defineProperty(target.prototype, 'alert', {
      value: args.alert,
      writable: false,
    });
  };
}

// Type Script. , c'est quoi un décorateur et me faire.
// un exercice avec 3 utilisation d'un meme décorateur personalisé

/* En Angular, basé sur le typescript, un décorateur est une fonction spéciale attaché dans des classes,
des méthodes, des propriétés et de paramètres. Ils sont utilisé pour ajouter, modifier ou manipuler les informations suplementaires
qui sont attachés sur tous ce que j'ai dis en haut. Angular utilise pluisieurs décorateur intégrées comme @component,
@injectable, @inpuit, etc.*/

/***/
 