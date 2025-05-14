import { Injectable } from '@nestjs/common';
import { Type } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import type { TypeDto } from './types/TypeDto';
import type { TypeParams } from './types/TypeParams'

@Injectable()
export class TypeService {
    constructor(private readonly prisma: PrismaService) { }

    async getTypes(): Promise<Type[]> {
        return this.prisma.type.findMany()
    }

    async getFilteredType(params: TypeParams): Promise<Type[]> {
        const { skip, take, cursor, where, orderBy } = params
        return this.prisma.type.findMany({
            skip, take, cursor, where, orderBy
        })
    }

    async createType(data: TypeDto): Promise<Type> {
        return this.prisma.type.create({
            data
        })
    }

    async deleteType(typeId: number): Promise<Type> {
        return await this.prisma.type.delete({
            where: {
                id: typeId
            }
        })
    }
    async editType(data: Type): Promise<Type> {
        return await this.prisma.type.update({
            where: {
                id: data.id
            },
            data
        })
    }
}
