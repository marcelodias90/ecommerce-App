import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('endereco')
export class Endereco {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    principal: number;
  
    @Column()
    apelido: string
  
    @Column()
    cep: string;
    
    @Column()
    logradouro: string;
  
    @Column()
    complemento: string;
  
    @Column()
    bairro: string;

    @Column()
    localidade: string;

    @Column()
    uf: string;

    @Column()
    ibge: number;

    @Column()
    gia: number;

    @Column()
    ddd: number;

    @Column()
    siafi: number;

    @Column()
    usuario_id: number;
}