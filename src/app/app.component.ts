import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private hello = 'Hello';
  private world = 'world';
  private ponctuations = '!';

  constructor() {}

  /**
   * Cette méthode getter permet de retourner le message hello world
   */
  public get helloworld(): string {
    return this.hello + ' ' + this.world + ' ' + this.ponctuations;
  }
}
