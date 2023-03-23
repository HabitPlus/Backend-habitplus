import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty( {example: 'Caritas'})
    fisrt_name: string;

    @ApiProperty({example: 'Sant Feliu'})
    last_name: string;

    @ApiProperty({example: 'CaritasSantFeliu'})
    user_name: string;

    @ApiProperty({example: 'habitpluscaritas@gmail.com'})
    email: string;

    @ApiProperty({example: 'CaritasSantFeliuv1'})
    password: string;

    @ApiProperty({example: 'registered'})
    role: string;
}
