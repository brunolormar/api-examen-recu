import { IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductoDto {
    @IsString()
    @MinLength(5)
    CodigoProducto: string;

    @IsString()
    @MinLength(2)
    Nombre: string;

    @IsString()
    Gama: string;

    @IsString()
    Proveedor: string;

    @IsString()
    @MinLength(10)
    Descripcion: string;

    @IsNumber()
    @IsPositive()
    CantidadEnStock: number;

    @IsNumber()
    @IsPositive()
    PrecioVenta: number;

    @IsNumber()
    @IsPositive()
    PrecioProveedor: number;

    @IsString()
    imagen: string;

    @IsString()
    @MinLength(3)
    gama?: string;
}
