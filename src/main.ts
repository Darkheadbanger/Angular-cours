import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Main.ts est le point d'entrée de l'application. il importe la platefrome spécifique qui est
// généralement la méthode platformBrowserDynamic() et le module principale de l'application.

// Ensuite, la méthode boostrapModule va compiler le module de l'application dans le navigateur
// et du démérage de l'excecution de l'application
