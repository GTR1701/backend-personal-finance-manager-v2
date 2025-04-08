import { Controller, Get, Param } from '@nestjs/common';
import { TypeService } from './type.service';

@Controller('type')
export class TypeController {
    constructor(private readonly typeService: TypeService) {}

    @Get()
    getType() {
        return this.typeService.getTypes()
    }

    @Get(':transactionType')
    getTypeByTransactionType(@Param('transactionType') transactionType: string) {
        return this.typeService.getTypesByTransactionType(transactionType)
    }
}
