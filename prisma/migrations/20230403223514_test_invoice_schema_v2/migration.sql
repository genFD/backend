/*
  Warnings:

  - A unique constraint covering the columns `[client_id]` on the table `Invoice` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address_id` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "address_id" TEXT NOT NULL,
ADD COLUMN     "client_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_client_id_key" ON "Invoice"("client_id");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
