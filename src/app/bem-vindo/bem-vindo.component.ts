import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit 
{
  private nome: string = "Thiago";
  private nome02: string = "Thiago";
  private nome03: string = '';
  public nome04: string = '';

  private idade: number = 10;
  private ultimoId: number = 1;
  
  private adicionado01: boolean = false;

  private funcionarios: any = [];

  constructor() { }

  public adicionar01(): void
  {
    console.log(`Adicionando ${this.getNome()}`);
    const numero: number = Math.round(Math.random() * 100);
    this.setNome(`João ${numero}`);
  }

  public adicionar02(nomeInput: string): void
  {
    this.setNome02(nomeInput);
  }
  
  public adicionar03(nomeInput: string): void
  {
    console.log(this.getUltimoId());
    
    this.getFuncionarios().push({
      id: this.getUltimoId(),
      nome: nomeInput});
    this.setUltimoId(this.getUltimoId() + 1);
  }

  ngOnInit(): void {
  }

  public getNome(): string
  {
    return this.nome;
  }
  public setNome(nome: string): void
  {
    this.nome = nome;
  }

  public getIdade(): number
  {
    return this.idade;
  }
  public setIdade(idade: number): void
  {
    this.idade = idade;
  }

  public getNome02(): string
  {
    return this.nome02;
  }
  public setNome02(nome02: string): void
  {
    this.nome02 = nome02;
  }

  public getNome03(): string
  {
    return this.nome03;
  }
  public setNome03(nome03: string): void
  {
    this.nome03 = nome03;
  }

  public getAdicionado01():boolean
  {
    return this.adicionado01;
  }
  public setAdicionado01(adicionado01: boolean): void
  {
    this.adicionado01 = adicionado01;
  }

  public getFuncionarios(): any[]
  {
    return this.funcionarios;
  }
  public setFuncionarios(funcionarios: any[]): void
  {
    this.funcionarios = funcionarios;
  }

  public getUltimoId(): number
  {
    return this.ultimoId;
  }
  public setUltimoId(ultimoId: number): void
  {
    this.ultimoId = ultimoId;
  }


}
