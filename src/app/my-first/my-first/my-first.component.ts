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

/**
 *     Qu’est-ce qu’un composant Angular :
 *  Un composant Angular contrôle une partie de l'écran appelée vue. Chaque application Angular a au moins un composant, le composant racine, généralement appelé AppComponent. 
    Un composant se compose d'un template HTML, qui définit la vue, et d'une classe TypeScript, qui gère la logique de la vue.

    Qu’est-ce qu’un décorateur de composant :
    Un décorateur de composant, @Component, est une fonction spéciale qui ajoute des métadonnées à une classe de composant.
     Ces métadonnées indiquent à Angular comment utiliser la classe : en tant que composant, et comment le composant doit être traité.

    Comment une application Angular démarre :
    Une application Angular démarre en exécutant le fichier main.ts, qui initialise l'environnement d'exécution et lance AppModule (le module racine).
    AppModule déclare AppComponent (le composant racine), qui est chargé dans le index.html à l'emplacement de la balise <app-root>.

    Qu’est-ce qu’un module Angular, AppModule :

    Un module Angular est une classe décorée avec @NgModule. Les modules sont utilisés pour regrouper des fonctionnalités connexes et fournir un cadre de travail organisé.
    AppModule est généralement le module racine, qui importe les fonctionnalités nécessaires pour lancer l'application.

    Comment déclarer des templates et des styles :

    Les templates et les styles sont déclarés dans le décorateur de composant. Le template est défini par la propriété template ou templateUrl, et les styles sont définis par la propriété styles ou styleUrls.

    C'est quoi Angular CLI :

    Angular CLI (Command Line Interface) est un outil en ligne de commande qui facilite la création et la gestion des applications Angular.
    Il permet de générer des squelettes d'applications, de composants, de modules, de services, etc., et de gérer le processus de build et de test.

    C'est quoi les métadonnées :

    Les métadonnées sont des informations qui décrivent la classe à laquelle elles sont associées. En Angular, les métadonnées indiquent à Angular comment traiter une classe.
    Par exemple, si une classe est décorée avec @Component, les métadonnées indiquent qu'il s'agit d'un composant et fournissent des informations supplémentaires, comme quel template et quels styles utiliser pour ce composant.
 */
