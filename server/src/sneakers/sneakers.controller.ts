import { sneakersDatabase } from './sneakers.database';
import { ISneakers } from './sneakers.interface';
import { Controller, Get, Param, Body, Put, HttpException, HttpStatus } from '@nestjs/common';

@Controller('sneakers')
export class SneakersController {
  private sneakers: ISneakers[] = sneakersDatabase;

  @Get()
  getAllSneakers(): ISneakers[] {
    return this.sneakers;
  }

  @Get(':id')
  getSneakerById(@Param('id') id: string): ISneakers {
    const sneaker = this.sneakers.find((s) => s.id === id);
    if (!sneaker) {
      throw new HttpException(`Sneaker with id ${id} not found.`, HttpStatus.NOT_FOUND);
    }
    return sneaker;

  }

  @Put(':id')
  updateSneaker(
    @Param('id') id: string,
    @Body() updatedSneaker: ISneakers,
  ): ISneakers {
    const index = this.sneakers.findIndex((sneaker) => sneaker.id === id);
    const sneaker = { id, ...updatedSneaker };
    this.sneakers[index] = sneaker;
    return sneaker;
  }
}
