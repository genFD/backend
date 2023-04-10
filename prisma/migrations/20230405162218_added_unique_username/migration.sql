/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User_Invoice` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_Invoice_username_key" ON "User_Invoice"("username");
