import { Usuario } from "../entities/usuario.entity";
import { USUARIO_REPOSITORY } from "../typeOrm/typeorm.repositories";


export const usuarioProvider = 
    {
        provide: USUARIO_REPOSITORY,
        useValue: Usuario
    }
