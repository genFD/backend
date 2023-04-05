/*
  Warnings:

  - You are about to drop the column `replyingToUser_id` on the `Reply` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User_Feedback` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Reply` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reply" DROP CONSTRAINT "Reply_replyingToUser_id_fkey";

-- AlterTable
ALTER TABLE "Reply" DROP COLUMN "replyingToUser_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_Feedback_username_key" ON "User_Feedback"("username");

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User_Feedback"("id") ON DELETE CASCADE ON UPDATE CASCADE;
