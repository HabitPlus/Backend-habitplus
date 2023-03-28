/* eslint-disable prettier/prettier */
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContentDto } from './create-content.dto';

export class UpdateContentDto extends PartialType(CreateContentDto) {
    @ApiProperty({
        example: "Nutricion",
    })
    section: string;
    
    @ApiProperty({
        example: "Comidas recomendadas",
    })
    title: string;

    @ApiProperty({
        example: "Las castanyas son muy ricas",
    })
    paragraph: string;
}
