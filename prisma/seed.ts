import { peoples } from './peopleSeed'
import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const main = async () => {
  for (const people of peoples) {
    await prisma.people.create({
      data: {
        firstName: people.firstName,
        lastName: people.lastName,
        updatedAt: new Date(),
        contactInfos: {
          create: [
            {
              type: 'Whatsapp',
              info: faker.phone.number('+55###########'),
              updatedAt: new Date()
            }
          ]
        }
      }
    })
  }
}

main().catch(e => {
  console.log(e)
  process.exit(1)
}).finally(async () => prisma.$disconnect())
