import { Injectable } from '@nestjs/common';
import { Type } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
