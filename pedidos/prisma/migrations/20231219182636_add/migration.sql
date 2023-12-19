/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_customerEmail_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "customers_id_key" ON "customers"("id");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
