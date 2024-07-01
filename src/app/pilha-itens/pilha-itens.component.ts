import { Component, inject } from '@angular/core';
import { PilhaService } from '../pilha.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PilhaComponent } from '../pilha/pilha.component';

@Component({
  selector: 'app-pilha-itens',
  standalone: true,
  templateUrl: './pilha-itens.component.html',
  styleUrl: './pilha-itens.component.css',
  imports: [FormsModule, CommonModule, PilhaComponent],
})
export class PilhaItensComponent {
  itemPilha: string = '';
  mensagemAoRemoverItem: string = '';

  private pilhaService = inject(PilhaService);

  adicionarItem() {
    if (this.itemPilha) {
      this.pilhaService.push(this.itemPilha);
      this.itemPilha = '';
    } else {
      // Capacidade máxima atingida
      alert('Capacidade máxima da pilha atingida. Não foi possível adicionar o item.');
    }
  }
  get pilha(): string[] {
    return this.pilhaService.getPilha();
  }

  removerItemPilha() {
    const itemRemovido = this.pilhaService.removerItemDaPilha();
    if (itemRemovido) {
      this.mensagemAoRemoverItem = `Item removido: ${itemRemovido}`;
    } else {
      this.mensagemAoRemoverItem = `Nenhum item para remover`;
    }
  }

}
