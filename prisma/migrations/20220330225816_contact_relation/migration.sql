/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Contact_customerId_key" ON "Contact"("customerId");
