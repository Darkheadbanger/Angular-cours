/* COMPRENDRE APP MODULE
    Qu'est ce qu'un module Angular:
    
    1. Les modules: 
    
    Angular est concu pouvoir développer de large application. La modularité est donc au coeur de sa conception et de son fonctionnement.

    Le système de modularité d'Angular répose sur des "modules" Angular également appelé "NgModules".

    Un "module" est un mécanisme pour régrouper des éléments Angular, c'est à dire des composants, des directives, des pipes et des services, qui sont lié de pouvoir être combiné avec d'autres
    modules pour créer une application.

    Autrement dit, il s'agit d'une ensemble de code cohérent permettant une fonctionnalité et qui se relie à d'autres "modules" afin d'aboutir a une applcation.

    Comme nous l'avons vue toute à l'heure, une application Angular à au minimum un module à utiliser pour lancer une application, il s'agit du module "root" (c'est à dire la racine en Francais). Par convention, ce module est toujours appelé
    'AppModule'.

    Un module est tout simplement une classe avec un décorateur "@NgModule". Ce décorateur comprends des métadonées donc les principals sont : 


*/

//1. Méthode qui dit console.log( hello wolrd!);
let helloWorld = (): string => {
  return 'Hello World';
};

//console.log(helloWorld());

let helloWorld1 = (helloWorld: string): string => {
  return helloWorld;
};

console.log(helloWorld1('Hello galaxy'));

let helloWorld2 = (): void => {
  console.log('Hello universe');
};

helloWorld2();

//2. Méthode qui permet de calculer la moyenne de 4 valeur d'entreé , les deux premiere seront sommé avant

function moyenne(
  valeur1: number,
  valeur2: number,
  valeur3: number,
  valeur4: number
): void {
  let deuxValeurSomme = [valeur1, valeur2].reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  let moyenneDeValeur = (deuxValeurSomme + valeur3 + valeur4) / 4;
  console.log(moyenneDeValeur);
}

//console.log(moyenne(1, 2, 3, 4));

//3. Méthode qui créer une Map en fonction de parametre d'entrée et en sortie nous renvoie une clé valeur
//au choix'

interface CleValeur {
  nom: String;
  prenom: string;
}

const cleValeur: CleValeur[] = [
  {
    nom: 'Bouhaben',
    prenom: 'David',
  },
];

//console.log("finded", result[0])

function cleValeurAuChoix(
  cleValeur: CleValeur[]
): Array<{ key: string; value: string }> {
  return Object.entries(cleValeur[0])
    .filter(([key, value]) => value === 'Bouhaben')
    .map(([key, value]) => ({ key, value }));
}
console.log('cleValeur', cleValeurAuChoix(cleValeur));

//4. Méthode qui va prendre en entrée un tableau et qui va en sorti nous donner la 4 eme valeur,

const quatreTableau: number[] = [1, 2, 3, 4, 5];

function sortie4eme(quatreTableau: number[]) {
  return quatreTableau.find((predicate) => predicate === 4);
}
let quatrieme = sortie4eme(quatreTableau);
console.log('quatrieme', quatrieme);

// Solution plus simple de chatGPT
console.log(quatreTableau[3]);

//5. Méthode qui va retirer les valeur redondante d'un tableau entrant'
// Enlever le double dans un tableau
const doubleTableau: number[] = [1, 2, 3, 4, 5, 6, 6, 6, 7];

function effacerIdentique(doubleTableau: number[]): number[] {
  const newArr: number[] = [];

  for (let i = 0; i < doubleTableau.length; i++) {
    if (!newArr.includes(doubleTableau[i])) {
      newArr.push(doubleTableau[i]);
    } else {
      false;
    }
  }
  return newArr;
}
console.log('ohohoh', effacerIdentique(doubleTableau));

let enleverValeurRedondante = (doubleTableau: number[]): number[] => {
  return [...new Set(doubleTableau)];
};
console.log(enleverValeurRedondante(doubleTableau));
// Solution plus simple de chatGPT
function removeDuplicates(arr: number[]) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log('holla,', removeDuplicates(doubleTableau));

/*3eme exercice revoir les class : Comprendre l'heritage a travers. un exercice ou on souhaite créer
une usine de voiture en tréer et en sorti des client qui en achete dans un magasin de voiture.*/
interface UsineVoiture {
  personnels: number;
  nomUsine: string;
  addresse: string;
}

interface Personnels {
  nomVendeur: string;
  age: number;
  poste: string;
  sexe: string;
}

interface Vehicule {
  vehicule: string;
  roues: number;
  portes: number;
  marque: string;
  moteur: string;
  puissance: number;
  prix: number;
  couleur: string;
  model: string;
  year: number;
}

interface Clients {
  nom: string;
  prenom: string;
  age: number;
  sexe: string;
  argent: number;
  acheteVoiture(): void;
}

class UsineVoiture implements UsineVoiture, Personnels, Vehicule {
  personnels: number = 50;
  nomUsine: string = 'Auto Factory';
  addresse: string = '123 Main St';
  nomVendeur: string = 'Jane Doe';
  age: number = 30;
  poste: string = 'Manager';
  sexe: string = 'Female';
  vehicule: string = 'Sedan';
  roues: number = 4;
  portes: number = 4;
  marque: string = 'Toyota';
  moteur: string = 'Gasoline';
  puissance: number = 150;
  prix: number = 25000;
  couleur: string = 'White';
  model: string = 'Camry';
  year: number = 2020;
  constructor(
    personnels?: number,
    nomUsine?: string,
    addresse?: string,
    nomVendeur?: string,
    age?: number,
    poste?: string,
    sexe?: string,
    vehicule?: string,
    roues?: number,
    portes?: number,
    marque?: string,
    moteur?: string,
    puissance?: number,
    prix?: number,
    couleur?: string,
    model?: string,
    year?: number
  ) {
    if (personnels) this.personnels = personnels;
    if (nomUsine) this.nomUsine = nomUsine;
    if (addresse) this.addresse = addresse;
    if (nomVendeur) this.nomVendeur = nomVendeur;
    if (age) this.age = age;
    if (poste) this.poste = poste;
    if (sexe) this.sexe = sexe;
    if (vehicule) this.vehicule = vehicule;
    if (roues) this.roues = roues;
    if (portes) this.portes = portes;
    if (marque) this.marque = marque;
    if (moteur) this.moteur = moteur;
    if (puissance) this.puissance = puissance;
    if (prix) this.prix = prix;
    if (couleur) this.couleur = couleur;
    if (model) this.model = model;
    if (year) this.year = year;
  }
}

class Client extends UsineVoiture implements Clients {
  nom: string = '';
  prenom: string = '';
  ages: number = 0;
  sexes: string = '';
  argent: number = 0;
  constructor(
    nom?: string,
    prenom?: string,
    ages?: number,
    sexes?: string,
    argent?: number
  ) {
    super();
    if (nom) this.nom = nom;
    if (prenom) this.prenom = prenom;
    if (ages) this.ages = ages;
    if (sexes) this.sexes = sexes;
    if (argent) this.argent = argent;
  }
  acheteVoiture(): string {
    return `Le vendeur ${this.nomVendeur} va servir le client ${this.sexes} ${this.nom} ${this.prenom} pour acheter un vehicule de type ${this.vehicule} de marque ${this.marque} et de modèle ${this.model} de couleur ${this.couleur} à une puissance de ${this.puissance} chevaux dans l'usine ${this.nomUsine} pour un somme de ${this.prix} car le budget du cleint est de ${this.argent}`;
  }
}

const usineVoiture = new UsineVoiture();
const client = new Client('David', 'Bouhaben', 25, 'Monsieur', 250000);

console.log(client.acheteVoiture());

//penser a utiliser héritage, scope et accesseurs interfaces.
//4eme exercice essayer de réaliser un exempel de l'utilisation des décoration via typescript
// Le décorateur est des déclarations particulères appliquées à des:
//classes décorateur
//méthodes décorateur
//paramètre décorateur
//propriétés décorateur
// Prefixés d'un @
// Executés au moment du runtime

// Implementer un décoratuer
// Une fonction: Appel immédiat pas d'initialisation possible
// Une factory:
// Appel immédiat mais permet de paramétrer le décorateur
//Un décorateur est une simplement une expression, qui est en faite executé comme une fonction

// Classe décorateur
// Utilisé pour décoré les classes.
// On créer un décorateur Greeter pour ajouter une méthode greet dans la classe de décorateur

// declare type ClassDecorator = <TFunction extends Function>(
//   target: TFunction
// ) => TFunction | void;
//user.ts
function Greeter(target: Function): void {
  target.prototype.greet = function (): void {
    console.log('Hello Bytefer!');
  };
}

@Greeter
class User {}

let bytefer = new User();
(bytefer as any).greet();
console.log(bytefer);

/*Il va nous retourner "Hello Bytefer". La classe de décorateur à l'air facile, mais maintenant il y a un problem

Qu'est ce qu'on doit faire si on veut customiser la sortie de la méthode greet ? Pour satisfaite cette functionalité
, Nous devons utiliser le décorateur factory*/

function Greeter1(msg: string) {
  return (target: Function): void => {
    target.prototype.greet = function (): void {
      console.log(msg);
    };
  };
}

// Après avoir mise a jour le décorateur factory de Greeter, nous devons l'utilise dans cette manière
@Greeter1('Hello TypeScript!')
class User1 {}

let bytefer1 = new User1();
(bytefer1 as any).greet();
console.log('bytefer1', bytefer1);

/*La sortie de ce code est "Hello Typescript". A noter qu'on peut utiliser une classe mutlriple de décoateur pour le même classe.
Par exemple : */

function Log(target: Function): void {
  target.prototype.log = (msg: string) => {
    console.log(`From ${target.name}: `, msg);
  };
}

@Log
@Greeter1('Hello TypeScript 1!')
class User2 {}

let bytefer2 = new User2();
(bytefer2 as any).greet();
(bytefer2 as any).log('Hello Kakuqo!');

/*Dans le code ci dessus, nous avons ajouté 2 décorateur pour la classe Uszer, après cela, nous pouvons appelé
la méthode greet et log dans l'instance de User*/

// Décorateur propriétés

// Décorateur propriété est utilisé pour décoré les propriétés de classes. Il corresponds au types de déclarations comme suivant:

//declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

// La funciton de décorateur propriété prends 2 paramètres: target et property. Accordée avec la définition de décotrateur de propriété, on va définit
//la propriété décorateur logProperty pour suivre les actions de user dans la propriété

function logProperty(target: any, key: string) {
  let value = target[key];

  const getter = function () {
    console.log(`Getter for ${key} returned ${value}`);
    return value;
  };

  const setter = function (newVal: any) {
    console.log(`Set ${key} to ${newVal}`);
    value = newVal;
  };

  // Remplacer les propriétés
  if (delete target[key]) {
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
}

// Une fosis qu'on a le décorateur de propriété logProperty, nous pouvons l'appliquer dans la classe. Par exemple, j'utilise le décorateur logProperty
// dans la propriété "name" de la classe User:

class User3 {
  @logProperty
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user3 = new User3('David');
user3.name = 'Dadou';
console.log(user3.name);

/*La sortie est:
Set name to Bytefer
Set name to Kakuqo
Getter for name returned Kakuqo
Kakuqo
*/
// On peut décoré les propriétés de la class, nous pouvons aussi décorer les méthodes de la classe.
// Methode d"corateur
// La décorateur méthode est utilisé pour décorer les méthodes de classes. Il correspond au type de déclaration comme :

// node_modules/typescript/lib/lib.es5.d.ts
/*
declare type MethodDecorator = <T>(
  target: Object, 
  propertyKey: string | symbol, 
  descriptor: TypedPropertyDescriptor<T>
) => TypedPropertyDescriptor<T> | void;
*/

// Comparer a la décorateur de propriété, la méthode de décorateur a un paramètre en plus. Le type de paramètre est :
interface TypedPropertyDescriptor<T> {
  enumerable?: boolean;
  configurable?: boolean;
  writable?: boolean;
  value?: T;
  get?: () => T;
  set?: (value: T) => void;
}

// Si vous ne voulez pas utiliser le generics, vous pouvez l'utiliser de cette manière:
/*interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
}*/

// Si on liy la définition de la décorateur de la méthode, on va définit la décoratreur de méthode logMethod pour tracer l'invocation de la méthode membre de la classe

function logMethod(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  let originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Before invoking method: ${propertyKey}`);
    let result = originalMethod.apply(this, args);
    console.log(`After invoking method: ${propertyKey}`);
    return result;
  };
}

// Une fois que nouys avons la décorateur logMethod, nous pouvons l'appliquer dans le membre de méthods de la classe
// Pour eemple, j'utilise le décorateur logMethod sur la membre greet de la méthode de la classe User

class User4 {
  @logMethod
  greet(msg: string): string {
    return `Hello ${msg}!`;
  }
}

let user4 = new User4();
let msg = user4.greet('Bytefer');
console.log(msg);

/*sortie:
Before invoking method: greet
After invoking method: greet
Hello Bytefer!*/

//Après avoir appris la méthode décorateur, nous pouvons définir certains méthodes décorateurs utiles. Tel que le "delat", "throttle" etc

function delay(milliseconds: number = 0): any {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, milliseconds);
    };
    return descriptor;
  };
}

//Enfin, nous allons introduire le décorateur de paramètre

//Le décorateur de paramètre est utilisé pour décorer les paramètres dans la méthode. Il corresponds aux types de déclaration comme:

// node_modules/typescript/lib/lib.es5.d.ts
/*declare type ParameterDecorator = (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number) => void;
  */

// Selon la définition de paramètre de décorateur. On va définir la méthode de décorateur logParameter:

function logParameter(_target: Object, key: string, parameterIndex: number) {
  console.log(
    `The parameter in position ${parameterIndex} at ${key} has been décorated`
  );
}

// Avec le décorateur "logoParameter" en place, nous l'appliquons le paramètre "msg" de la méthode "greet" sans la classe User:

class User5 {
  greet(@logParameter msg: string): void {
    console.log(msg);
  }
}

let user5 = new User5();
user5.greet('Dadou');

// The parameter in position 0 at greet has been decorated
// Dadou

//component explication technique
//console.clear()

// Component explication technique

/* *****************************************************
Mercredi: finir les exos, ensuite on va finir l'explication de AppModule, on va voir de template et de style ensuite y aura des petites questions: 
1. Qu'est ce qu'un composant angular ?
2. Qu'es ce qu'un mdoule Angular ?
3. Comment déclarer de template et du style ?
4. Comment on demarre une application Angular ?

On créera notre nouveau component 

A apprendre:

1. Javascript (ES2023)
2. TypeScript 5.0
3. CSS/SCSS
4. Angular
5. Angular Material
6. RxJS
7. Test unitaire: Jest et Jasmine
8. Test e2e: Cypress
9. FireBase
10. Node.JS
11. Nest.JS
12. React 18

L'autre prof:
10. Golang et lui demander de roadmap
11. Lui demander de framework Golang et savoir CRUD Golang
12. API Rest Golang
13. Corotine Golang
14 Travailler la performance et Math et algorithme.
15. Demande faire se proteger, clé privé change tout le temps.

Seul:
1. Apprendre les basses de Java

Java mettre de côté pour l'instant, a travailler dans le tas si je trouve un entreprise
************************************************/
