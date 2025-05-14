import { Prisma } from "@prisma/client"

export class TypeParams {
    skip?: number
    take?: number
    cursor?: Prisma.TypeWhereUniqueInput
    where?: Prisma.TypeWhereInput
    orderBy?: Prisma.TypeOrderByWithRelationInput
}