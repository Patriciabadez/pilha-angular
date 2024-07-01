import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PilhaItensComponent } from "./pilha-itens/pilha-itens.component";
import { PilhaComponent } from "./pilha/pilha.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PilhaItensComponent, PilhaComponent]
})
export class AppComponent {
  title = 'projeto-pilha';
}
