import { ApiProperty } from "@nestjs/swagger";

export class BoundsDto {
    @ApiProperty({
        name: 'min',
        type: 'number'
    })
    min: number;

    @ApiProperty({
        name: 'max',
        type: 'number'
    })
    max: number;
}