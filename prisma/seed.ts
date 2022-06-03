import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";


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
};



run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
