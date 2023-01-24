/*  Les composants(ou components en anglais) 
  Un component controle une partie de l'écran appelée une vue.
  Dans le component la logique (le code pour controler la vue) est réalisé dans une classe.

  Les templates

  Un template est une forme d'HTML, qui dit a un angular comment doit être effectué le rendue de component.
  Vue comme notre exemple on peut inserer directement du code dans le HTML
  Ce bout d'HTML est une interpolation exemple:
  {{ nom }}.
  Une interpolation est simplement, comme son l'indique, le remplacement de la variable a une valeur, de manière dynamique.
  Ainsi, si la valeur de la variable "nom" est modifié, le HTML sera mise a jour automatiquement.
  Cela permet de rendre l'HTML "REACTIF".

  Les métadonnées 
  
  Elles permettent de dire à Angular comment traiter la classe.
  La classe 'App' ne se distinque d'une classe classique que parcequ'elle comporte juste au dessus d'elle un décorateur "@Component".
  Ce décorateur permet donc :

  Premièrement, de dire a angular que cette classe est un composant (component).
  Deuxièmement, de lui attribuer de metadonnée, qui sont des options de configuration: 

  * - selector: Il s'agit de la séléctor CSS qui dit a Angular de créer et d'inserer une instance de ce composant ou elle trouve une balise "my-app".
  Angular inserera entre ces deux balises "<my-app> </my-app>".
  
  * - templateURL ou template: Contient l'addresse de template associé au composant (templateURL) ou alors du template directement (template).

  * - styleURL ou style: Continet l'addresse de la feuille de style (CSS ou SCSS) associé au composant (styleURL) ou alors les styles directement (style). */
