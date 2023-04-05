/*
  Warnings:

  - You are about to drop the column `user_id` on the `Reply` table. All the data in the column will be lost.
  - Added the required column `replyingToUser_id` to the `Reply` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reply" DROP CONSTRAINT "Reply_user_id_fkey";

-- AlterTable
ALTER TABLE "Reply" DROP COLUMN "user_id",
ADD COLUMN     "replyingToUser_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_replyingToUser_id_fkey" FOREIGN KEY ("replyingToUser_id") REFERENCES "User_Feedback"("id") ON DELETE CASCADE ON UPDATE CASCADE;
