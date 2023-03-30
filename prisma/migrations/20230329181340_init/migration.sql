-- CreateTable
CREATE TABLE "User_Cardeal" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_Cardeal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Invoice" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Feedback" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Cardeal_email_key" ON "User_Cardeal"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_Invoice_email_key" ON "User_Invoice"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_Feedback_email_key" ON "User_Feedback"("email");
