import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { PilhaService } from '../pilha.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pilha',
  standalone: true,
  templateUrl: './pilha.component.html',
  styleUrl: './pilha.component.css',
  imports: [CommonModule, FormsModule],
})
export class PilhaComponent  {
  @Input() capacidadeMaxima: number = 0;

  private pilhaService = inject(PilhaService);

  get tamanhoPilha() {
    return this.pilhaService.tamanhoPilha();
  }

  get estaVazia() {
    return this.pilhaService.estaVazia();
  }

  get pilha() {
    return this.pilhaService.getPilha();
  }

  onCapacidadeChange() {
    this.pilhaService.setCapacidadeMaxima(this.capacidadeMaxima);
  }
}
