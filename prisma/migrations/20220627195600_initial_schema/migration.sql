-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partshouse" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Partshouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
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

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Part" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "cost" INTEGER,
    "model" TEXT,
    "serial" TEXT,
    "imgUrl" TEXT,
    "purchaseDate" TEXT,
    "purchaseUrl" TEXT,
    "warrantyInfo" TEXT,
    "description" TEXT,
    "recordId" INTEGER NOT NULL,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordLog" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "recordId" INTEGER NOT NULL,

    CONSTRAINT "RecordLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartLog" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "partId" INTEGER NOT NULL,

    CONSTRAINT "PartLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record_Notification" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "Record_Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Part_Notification" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "Part_Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RecordToRecord_Notification" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PartToPart_Notification" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Record_NotificationToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Part_NotificationToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_RecordToRecord_Notification_AB_unique" ON "_RecordToRecord_Notification"("A", "B");

-- CreateIndex
CREATE INDEX "_RecordToRecord_Notification_B_index" ON "_RecordToRecord_Notification"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PartToPart_Notification_AB_unique" ON "_PartToPart_Notification"("A", "B");

-- CreateIndex
CREATE INDEX "_PartToPart_Notification_B_index" ON "_PartToPart_Notification"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Record_NotificationToUser_AB_unique" ON "_Record_NotificationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_Record_NotificationToUser_B_index" ON "_Record_NotificationToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Part_NotificationToUser_AB_unique" ON "_Part_NotificationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_Part_NotificationToUser_B_index" ON "_Part_NotificationToUser"("B");

-- AddForeignKey
ALTER TABLE "Partshouse" ADD CONSTRAINT "Partshouse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Part" ADD CONSTRAINT "Part_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordLog" ADD CONSTRAINT "RecordLog_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartLog" ADD CONSTRAINT "PartLog_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecordToRecord_Notification" ADD CONSTRAINT "_RecordToRecord_Notification_A_fkey" FOREIGN KEY ("A") REFERENCES "Record"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecordToRecord_Notification" ADD CONSTRAINT "_RecordToRecord_Notification_B_fkey" FOREIGN KEY ("B") REFERENCES "Record_Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartToPart_Notification" ADD CONSTRAINT "_PartToPart_Notification_A_fkey" FOREIGN KEY ("A") REFERENCES "Part"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartToPart_Notification" ADD CONSTRAINT "_PartToPart_Notification_B_fkey" FOREIGN KEY ("B") REFERENCES "Part_Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Record_NotificationToUser" ADD CONSTRAINT "_Record_NotificationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Record_Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Record_NotificationToUser" ADD CONSTRAINT "_Record_NotificationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Part_NotificationToUser" ADD CONSTRAINT "_Part_NotificationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Part_Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Part_NotificationToUser" ADD CONSTRAINT "_Part_NotificationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
