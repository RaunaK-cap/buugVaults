/*
  Warnings:

  - Added the required column `UserID` to the `codedata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "codedata" ADD COLUMN     "UserID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "codedata" ADD CONSTRAINT "codedata_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "usersdata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
