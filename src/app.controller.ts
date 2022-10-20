import { Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { ApiBody, ApiParam, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    this.min = 1;

    this.max = 10;
  }

  private min: number;

  private max: number;

  @Get('goal')
  @ApiQuery({
    type: 'number',
    name: 'min',
    description: 'lower bound for goal'
  })
  @ApiQuery({
    type: 'number',
    name: 'max',
    description: 'upper bound for goal'
  })
  getRandom(@Query() query: { min: number; max: number }) {
    // TODO Add a pipe or something like that which will prevent a min greater than the max.

    const maxNumber = parseInt(`${query.max}`);
    const minNumber = parseInt(`${query.min}`);
    
    return Math.ceil(((maxNumber - minNumber + 1) * Math.random()) + minNumber - 1);
  }

  @Get('bounds')
  getBounds() {
    return {
      min: this.min,
      max: this.max,
    };
  }

  @Patch('bounds')
  @ApiQuery({
    type: 'number',
    name: 'min',
    description: 'min number in interval'
  })
  @ApiQuery({
    type: 'number',
    name: 'max',
    description: 'max number in interval'
  })
  setBounds(@Query() query: { min: number; max: number }) {
    this.min = query.min;
    this.max = query.max;
    return {
      min: this.min,
      max: this.max,
    };
  }

  @Post('games')
  @ApiParam({
    name: 'bounds',
    required: false,
    type: 'object'
  })
  // @ApiBody({
  //   schema: {},
  //   type: 'object'
  // })
  @ApiProperty({
    description: 'Create a new game'
  })
  postGame() {
    
  }
}
