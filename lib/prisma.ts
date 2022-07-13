import { PrismaClient } from "@prisma/client";

export default new PrismaClient();

//This is so there is only one instance of prisma, for one connection.