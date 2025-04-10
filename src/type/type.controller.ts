import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeDto } from './types/TypeDto';

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

    @Post('create')
    createType(@Body() typeData: TypeDto) {
        return this.typeService.createType(typeData)
    }
}
