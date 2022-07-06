import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { partsHouseData, recordData, partsData } from "./seederData";


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

  await Promise.all(partsHouseData.map(ph => {
    return prisma.partshouse.upsert({
      where: { id: ph.id },
      update: {},
      create: {
        id: ph.id,
        name: ph.name,
        userId: ph.userId
      }
    })
  }))

  // await Promise.all(recordData.map(async(record) => {
  //   return prisma.record.upsert({
  //     where: { id: record.id },
  //     update: {},
  //     create: {
  //       id: record.id,
  //       name: record.name,
  //       brand: record.brand,
  //       icon: record.icon,
  //       partsHouseId: record.partsHouseId,
  //       parts: {
  //         create: record.parts.map((part) => ({
  //           id: part.id,
  //           name: part.name,
  //           brand: part.brand,
  //           recordId: part.recordId,
  //         })),
  //       },               
  //     },
  //   })
  // }))

  await Promise.all(recordData.map( async(record) => {
    return prisma.record.upsert({
      where: { id: record.id },
      update: {},
      create: {
        id: record.id,
        name: record.name,
        brand: record.brand,
        icon: record.icon,
        partsHouseId: record.partsHouseId
      }
    })
  }))

  await Promise.all(partsData.map(async(part) => {
    return prisma.part.upsert({
      where: { id: part.id },
      update: {},
      create: {
        id: part.id,
        name: part.name,
        brand: part.brand,
        recordId: part.recordId
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
