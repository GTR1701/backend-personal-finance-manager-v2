import { Prisma } from '@prisma/client';

export class ExpenseParams {
    skip?: number
    take?: number
    cursor?: Prisma.ExpenseWhereUniqueInput
    where?: Prisma.ExpenseWhereInput
    orderBy?: Prisma.ExpenseOrderByWithRelationInput
}