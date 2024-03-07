import { IsString, MinLength } from "class-validator";

export class CreateGamaDto {
    @IsString()
    @MinLength(3)
    Gama: string;

    @IsString()
    @MinLength(10)
    Descripcion: string;

    @IsString()
    Imagen: string;
}
