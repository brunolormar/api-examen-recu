import { Column, PrimaryColumn } from "typeorm";

export class Gama {
    @PrimaryColumn('increment')
    Gama: string;

    @Column('text')
    Descripcion: string;

    @Column('text')
    Imagen: string;
}
