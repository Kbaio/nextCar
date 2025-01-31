export interface Usuario {
    id: number | string;
    nombre: string;
    email: string;
    telefono: string;
    rol: string;
    password: string;
    clasificacion: number;
    wishlist: number[];
}
