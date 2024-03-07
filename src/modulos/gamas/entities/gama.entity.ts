import { Producto } from "src/modulos/productos/entities/producto.entity";
import { Column, OneToMany, PrimaryColumn } from "typeorm";

export class Gama {
    @PrimaryColumn('increment')
    Gama: string;

    @Column('text')
    Descripcion: string;

    @Column('text')
    Imagen: string;

    @OneToMany(
        () => Producto,
        (producto) => producto.gama,
        { eager: true }
    )
    productos?: Producto[] //virtual
}
