import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity('Token')
export class TokenCadastro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: number;

    @Column()
    usuario_id: number

    @CreateDateColumn()
    created_at: Date;
}