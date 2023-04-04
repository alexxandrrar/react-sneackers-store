import { sneakersDatabase } from "./sneakers.database";
import { ISneakers } from "./sneakers.interface";
import {
  Controller,
  Get,
  Param,
  Body,
  Put,
  InternalServerErrorException,
} from "@nestjs/common";

@Controller("sneakers")
export class SneakersController {
  private sneakers: ISneakers[] = sneakersDatabase;

  @Get()
  getAllSneakers(): ISneakers[] {
    try {
      return this.sneakers;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get("favourite")
  getAllFavouriteSneakers(): ISneakers[] {
    try {
      const favouriteSneakers = this.sneakers.filter((sneaker) => sneaker.isFavourite);
      return favouriteSneakers;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get("cart")
  getAllCartSneakers(): ISneakers[] {
    try {
      const cartSneakers = this.sneakers.filter((sneaker) => sneaker.isInCart);
      return cartSneakers;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Put(":id")
  updateSneaker(
    @Param("id") id: string,
    @Body() updatedSneaker: ISneakers
  ): ISneakers {
    try {
      const index = this.sneakers.findIndex((sneaker) => sneaker.id === id);
      const sneaker = { id, ...updatedSneaker };
      this.sneakers[index] = sneaker;
      return sneaker;
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }
}
