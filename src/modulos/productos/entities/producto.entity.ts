import { Gama } from "src/modulos/gamas/entities/gama.entity";
import { Column, OneToOne, PrimaryColumn } from "typeorm";

export class Producto {
    @PrimaryColumn('text')
    CodigoProducto: string;

    @Column('text')
    Nombre: string;

    @Column('text')
    Gama: string;

    @Column('text')
    Proveedor: string;

    @Column('text')
    Descripcion: string;

    @Column('numeric', {
        default: 0
    })
    CantidadEnStock: number;

    @Column('numeric')
    PrecioVenta: number

    @Column('numeric')
    PrecioProveedor: number

    @Column('text')
    imagen: string;

    @OneToOne(
        () => Gama,
        (gama) => gama.productos,
        {cascade: true}
    )
    gama?: Gama
}
