import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { AccountTypeDTO } from "./account-type.dto";
import { AccountTypeService } from "./account-type.service";

@Controller("account-type")
export class AccountTypeController {
  constructor(private readonly accountTypeService: AccountTypeService) {}

  @Get()
  async getAccountTypes() {
    return this.accountTypeService.findAll();
  }

  @Post("create")
  createAccountTypes(@Body() accountTypeBody: AccountTypeDTO[]) {
    return this.accountTypeService.create(accountTypeBody);
  }

  @Patch(":id")
  async updateAccountType(
    @Param(":id") accountTypeId: number,
    @Body() accountTypeBody: Partial<AccountTypeDTO>,
  ) {
    return this.accountTypeService.update(accountTypeId, accountTypeBody);
  }

  @Delete(":id")
  async deleteAccountType(@Param(":id") accountTypeId: number) {
    return this.accountTypeService.delete(accountTypeId);
  }
}
