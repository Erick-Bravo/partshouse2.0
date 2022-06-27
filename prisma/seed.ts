import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { recordData } from "./seederData";


const prisma = new PrismaClient();

const run = async () => {

  const salt = bcrypt.genSaltSync();

  await prisma.user.upsert({
    where: { email: "user@test.com" },
    update: {},
    create: {
      email: "user@test.com",
      password: bcrypt.hashSync("password", salt),
    },
  });

  await prisma.partshouse.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Home",
      userId: 1
    }
  })

  await Promise.all(recordData.map( async(record) => {
    return prisma.record.upsert({
      where: { id: record.id },
      update: {},
      create: {
        id: record.id,
        name: record.name,
        // brand: record.brand,
        icon: record.icon,
        partsHouseId: record.partsHouseId

      }
    })
  }))
};



run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
