/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

/* eslint-disable prettier/prettier */
export class CreateContentDto {
    @ApiProperty({
        example: "Nutricion",
    })
    section: string;

    @ApiProperty({
        example: 'Cocina Saludable',
    })
    title: string;

    @ApiProperty({
        example: 'lorem ipsum bla bla bla',
    })
    paragraph: string;
}
