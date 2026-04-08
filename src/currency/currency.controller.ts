import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { CurrencyDTO } from "./currency.dto";
import { CurrencyService } from "./currency.service";

@Controller("currency")
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  async getCurrencies() {
    return this.currencyService.findAll();
  }

  @Get(":id")
  async getCurrency(@Param(":id") currencyId: number) {
    return this.currencyService.findOne(currencyId);
  }

  @Post("create")
  createCurrency(@Body() currencyBody: CurrencyDTO[]) {
    return this.currencyService.create(currencyBody);
  }

  @Patch(":id")
  async updateCurrency(
    @Param("id") currencyId: number,
    @Body() currencyBody: Partial<CurrencyDTO>,
  ) {
    return this.currencyService.update(currencyId, currencyBody);
  }

  @Delete("delete/:id")
  async deleteCurrency(@Param(":id") currencyId: number) {
    return this.currencyService.delete(currencyId);
  }
}
