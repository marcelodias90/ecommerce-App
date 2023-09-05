import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pagamento')
export class Pagamento {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    numeroCartao: string;
  
    @Column()
    codigoCV: number;
  
    @Column()
    dataDeValidade: string;
   
    @Column()
    usuario_id: number;
}