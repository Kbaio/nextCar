import { UserRole } from "./user-role";

export interface Usuario {
    id: number | string;
    nombre: string;
    email: string;
    telefono: string;
    rol: UserRole;
    password: string;
    clasificacion: number;
    wishlist: number[];
}
