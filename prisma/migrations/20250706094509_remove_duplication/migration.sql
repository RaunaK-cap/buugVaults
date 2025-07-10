/*
  Warnings:

  - You are about to drop the column `email` on the `codedata` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `codedata` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "codedata" DROP COLUMN "email",
DROP COLUMN "firstname";
