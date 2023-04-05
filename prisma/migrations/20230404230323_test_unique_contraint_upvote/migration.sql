/*
  Warnings:

  - A unique constraint covering the columns `[user_id,feedback_id]` on the table `Upvote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Upvote_user_id_feedback_id_key" ON "Upvote"("user_id", "feedback_id");
