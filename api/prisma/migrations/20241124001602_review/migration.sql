/*
  Warnings:

  - You are about to drop the column `comment` on the `drivers` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `drivers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "drivers" DROP COLUMN "comment",
DROP COLUMN "rating";

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "driver_id" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
