import { Component } from '@angular/core';

@Component({
    selector: 'app-hello',
    template: `
        <h2>
            Nome: {{ getNome() }}
        </h2>
    `
})

export class HelloComponent
{
    private nome: string = 'Thiago';

    public getNome(): string
    {
        return this.nome;
    }
    public setNome(nome: string): void
    {
        this.nome = nome;
    }
}