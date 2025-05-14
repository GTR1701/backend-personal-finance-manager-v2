import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeDto } from './types/TypeDto';
import { Type } from '@prisma/client';

@Controller('type')
export class TypeController {
    constructor(private readonly typeService: TypeService) { }

    @Get()
    async getTypes(): Promise<Type[] | null> {
        return this.typeService.getTypes()
    }

    @Get(':transactionId')
    async getTypesByTransactionType(@Param('transactionId') transactionId: number) {
        return this.typeService.getFilteredType({
            where: {
                id: transactionId
            }
        })
    }

    @Post('create')
    async createType(@Body() type: TypeDto): Promise<Type> {
        return await this.typeService.createType(type)
    }

    @Post('edit')
    async editType(@Body() data: Type): Promise<Type> {
        return this.typeService.editType(data)
    }

    @Delete('delete/:id')
    async deleteType(@Param('id') id: number): Promise<Type> {
        return this.typeService.deleteType(id)
    }
}
