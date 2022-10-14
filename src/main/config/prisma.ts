import { PrismaClient, Prisma } from '@prisma/client'

export const prisma = new PrismaClient()
export const prismaNameSpace = Prisma
export const prismaError = (err: any): string => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // The .code property can be accessed in a type-safe manner
    if (err.code === 'P2002') {
      return 'There is a unique constraint violation, a new user cannot be created with this email'
    }
    if (err.code === 'P2025') {
      return 'An operation failed because it depends on one or more records that were required but not found. {cause}'
    }
  }
}
