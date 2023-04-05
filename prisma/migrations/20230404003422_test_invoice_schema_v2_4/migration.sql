/*
  Warnings:

  - You are about to drop the column `address_id` on the `Invoice` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_address_id_fkey";

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "address_id";
