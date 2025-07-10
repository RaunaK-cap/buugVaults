-- CreateTable
CREATE TABLE "codedata" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "email" TEXT,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "usererror" TEXT NOT NULL,
    "solutions" TEXT NOT NULL,
    "links" TEXT,

    CONSTRAINT "codedata_pkey" PRIMARY KEY ("id")
);
