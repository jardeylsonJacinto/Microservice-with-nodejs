-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");
