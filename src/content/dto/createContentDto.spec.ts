import { HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { CreateContentDto } from './create-content.dto';
import { ApiProperty } from '@nestjs/swagger';

describe('CreateContentDto', () => {
    it('should create a new instance', () => {
        const dto = new CreateContentDto();
        expect(dto).toBeDefined();
    });

    it('should have the correct properties', () => {
        const dto = new CreateContentDto();
        expect(dto.section).toBeUndefined();
        expect(dto.title).toBeUndefined();
        expect(dto.paragraph).toBeUndefined();
        expect(ApiProperty({ example: 'Nutricion' })).toBeDefined();
        expect(ApiProperty({ example: 'Cocina Saludable' })).toBeDefined();
        expect(ApiProperty({ example: 'lorem ipsum bla bla bla' })).toBeDefined();
    });
});

describe('CreateContentDto', () => {
    it('should pass validation if all fields are provided', () => {
        const dto = new CreateContentDto();
        dto.section = 'Nutricion';
        dto.title = 'Cocina Saludable';
        dto.paragraph = 'lorem ipsum bla bla bla';
        let error = null;
        try {
            validate(dto);
        } catch (e) {
            error = e;
        }
        expect(error).toBeNull();
    });
});
