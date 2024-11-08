import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class CriaUsuarioDTO {
  @IsNumber()
  idUsuario: number;
  @IsNotEmpty({ message: 'O campo não pode ser vazio' })
  @IsString({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'E-mail informado inválido!' })
  @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  senha: string;
}
