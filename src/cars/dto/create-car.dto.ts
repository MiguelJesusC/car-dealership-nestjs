import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateCarDto{
    @IsString({message: "the model must be a cool string"})
    readonly model: string
    @IsString({message: "the brand must be a cool string"})
    readonly brand: string
}