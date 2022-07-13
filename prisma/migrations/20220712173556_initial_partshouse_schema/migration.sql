-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partshouse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Partshouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "type" TEXT,
    "name" TEXT NOT NULL,
    "brand" TEXT,
    "cost" INTEGER,
    "model" TEXT,
    "serial" TEXT,
    "icon" TEXT,
    "imgUrl" TEXT,
    "purchaseDate" TEXT,
    "purchaseUrl" TEXT,
    "warrantyInfo" TEXT,
    "description" TEXT,
    "partsHouseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Part" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "cost" INTEGER,
    "model" TEXT,
    "serial" TEXT,
    "imgUrl" TEXT,
    "purchaseDate" TEXT,
    "purchaseUrl" TEXT,
    "warrantyInfo" TEXT,
    "description" TEXT,
    "recordId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordLog" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "recordId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecordLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartLog" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "partId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PartLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordNotification" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecordNotification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartNotification" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PartNotification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RecordToRecordNotification" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PartToPartNotification" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RecordNotificationToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PartNotificationToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_RecordToRecordNotification_AB_unique" ON "_RecordToRecordNotification"("A", "B");

-- CreateIndex
CREATE INDEX "_RecordToRecordNotification_B_index" ON "_RecordToRecordNotification"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PartToPartNotification_AB_unique" ON "_PartToPartNotification"("A", "B");

-- CreateIndex
CREATE INDEX "_PartToPartNotification_B_index" ON "_PartToPartNotification"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecordNotificationToUser_AB_unique" ON "_RecordNotificationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RecordNotificationToUser_B_index" ON "_RecordNotificationToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PartNotificationToUser_AB_unique" ON "_PartNotificationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PartNotificationToUser_B_index" ON "_PartNotificationToUser"("B");

-- AddForeignKey
ALTER TABLE "Partshouse" ADD CONSTRAINT "Partshouse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_partsHouseId_fkey" FOREIGN KEY ("partsHouseId") REFERENCES "Partshouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Part" ADD CONSTRAINT "Part_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordLog" ADD CONSTRAINT "RecordLog_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartLog" ADD CONSTRAINT "PartLog_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecordToRecordNotification" ADD CONSTRAINT "_RecordToRecordNotification_A_fkey" FOREIGN KEY ("A") REFERENCES "Record"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecordToRecordNotification" ADD CONSTRAINT "_RecordToRecordNotification_B_fkey" FOREIGN KEY ("B") REFERENCES "RecordNotification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartToPartNotification" ADD CONSTRAINT "_PartToPartNotification_A_fkey" FOREIGN KEY ("A") REFERENCES "Part"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartToPartNotification" ADD CONSTRAINT "_PartToPartNotification_B_fkey" FOREIGN KEY ("B") REFERENCES "PartNotification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecordNotificationToUser" ADD CONSTRAINT "_RecordNotificationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "RecordNotification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecordNotificationToUser" ADD CONSTRAINT "_RecordNotificationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartNotificationToUser" ADD CONSTRAINT "_PartNotificationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "PartNotification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartNotificationToUser" ADD CONSTRAINT "_PartNotificationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
