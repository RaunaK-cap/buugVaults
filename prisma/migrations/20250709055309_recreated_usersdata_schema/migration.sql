/*
  Warnings:

  - You are about to drop the column `firstname` on the `usersdata` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `usersdata` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `usersdata` table. All the data in the column will be lost.
  - Added the required column `name` to the `usersdata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usersdata" DROP COLUMN "firstname",
DROP COLUMN "lastname",
DROP COLUMN "password",
ADD COLUMN     "name" TEXT NOT NULL;
