import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column()
  sobrenome: string

  @Column({ length: 100 })
  email: string;
  
  @Column()
  cpf: string;

  @Column()
  senha: string;

  @Column()
  status: number;
}