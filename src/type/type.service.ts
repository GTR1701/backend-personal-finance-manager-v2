import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Type } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypeDto } from './types/TypeDto';

@Injectable()
export class TypeService {
    constructor(private readonly prisma: PrismaService) {}

    async getTypes(): Promise<Type[] | null> {
        return this.prisma.type.findMany()
    }
    
    async getTypesByTransactionType(transactionType: string): Promise<Type[] | null> {
        return this.prisma.type.findMany({
            where: {
                transactionType
            },
        })
    }

    async createType(type: TypeDto): Promise<string | BadRequestException> {
        try {
            await this.prisma.type.create({
                data: type
            })
            return "Type created successfully"
        } catch {
            return new BadRequestException()
        }
    }

    async editType(typeId: number): Promise<string | NotFoundException> {
        try {
            await this.prisma.type.delete({
                where: {
                    id: typeId
                }
            })
            return "Type deleted successfully"
        } catch {
            return new NotFoundException()
        }
    }
}
