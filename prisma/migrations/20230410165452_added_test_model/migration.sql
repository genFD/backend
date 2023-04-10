-- CreateTable
CREATE TABLE "test_model" (
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "test_model_name_key" ON "test_model"("name");
