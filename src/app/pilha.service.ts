import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PilhaService {
  private pilha: string[] = [];
  private capacidadeMaxima: number = 0;

  constructor() {
    this.carregarEstado();
  }

  push(item: string) {
    if (this.pilha.length < this.capacidadeMaxima) {
      this.pilha.unshift(item);
      this.salvarEstado();
    } else {
      console.log('Capacidade máxima atingida');
    }
  }

  getPilha(): string[] {
    return this.pilha;
  }

  removerItemDaPilha(): string | undefined {
    const itemRemovido = this.pilha.shift();
    this.salvarEstado();
    return itemRemovido;
  }

  tamanhoPilha(): number {
    return this.pilha.length;
  }

  estaVazia(): boolean {
    return this.pilha.length === 0;
  }

  setCapacidadeMaxima(capacidade: number) {
    this.capacidadeMaxima = capacidade;
    this.salvarEstado();
  }

  private salvarEstado() {
    localStorage.setItem('pilha', JSON.stringify(this.pilha));
    localStorage.setItem('capacidadeMaxima', this.capacidadeMaxima.toString());
    localStorage.setItem('vazio', this.estaVazia().toString());
  }

  private carregarEstado() {
    const pilhaSalva = localStorage.getItem('pilha');
    const capacidadeSalva = localStorage.getItem('capacidadeMaxima');

    if (pilhaSalva) {
      this.pilha = JSON.parse(pilhaSalva);
    }

    if (capacidadeSalva) {
      this.capacidadeMaxima = Number(capacidadeSalva);
    }
  }

}
