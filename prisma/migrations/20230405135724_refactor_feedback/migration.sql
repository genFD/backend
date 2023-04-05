/*
  Warnings:

  - You are about to drop the column `category_id` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `status_id` on the `Feedback` table. All the data in the column will be lost.
  - Added the required column `category` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_status_id_fkey";

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "category_id",
DROP COLUMN "status_id",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;
