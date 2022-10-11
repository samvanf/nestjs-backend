import { Controller, Get, Patch, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {

    this.min = 1;

    this.max = 10;}

  private min: number;

    private max: number;

 

    @Get('goal')

    getGoal() {

        return Math.ceil((this.max - this.min + 1)*Math.random() -1) + this.min;

    }

 

    @Get('bounds')

    getBounds() {

        return {

            min: this.min,

            max: this.max

        }

    } 

 

    @Patch('bounds')

    @ApiQuery({

        type: 'number',

        name: 'max'

    })

    @ApiQuery({

        type: 'number',

        name: 'min'

    })

    setBounds(@Query() query: {min: number, max: number}) {

        console.log(query)

        this.min = query.min;

        this.max = query.max;

        return {

            min: this.min,

            max: this.max

        }

    }
}
