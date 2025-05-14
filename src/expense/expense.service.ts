import { Injectable } from '@nestjs/common';
import { Expense, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExpenseParams } from './types/ExpenseParams';

@Injectable()
export class ExpenseService {
    constructor(private readonly prisma: PrismaService) { }

    async getExpenses(): Promise<Expense[]> {
        return this.prisma.expense.findMany()
    }

    async getFilteredExpense(params: ExpenseParams): Promise<Expense[]> {
        const { skip, take, cursor, where, orderBy } = params
        return this.prisma.expense.findMany({
            skip, take, cursor, where, orderBy
        })
    }

    async createExpense(data: Prisma.ExpenseCreateInput): Promise<Expense> {
        return this.prisma.expense.create({
            data
        })
    }

    async deleteExpense(typeId: number): Promise<Expense> {
        return await this.prisma.expense.delete({
            where: {
                id: typeId
            }
        })
    }
    async editExpense(data: Expense): Promise<Expense> {
        return await this.prisma.expense.update({
            where: {
                id: data.id
            },
            data
        })
    }
}
