-- CreateEnum
CREATE TYPE "Categoria" AS ENUM ('ALIMENTACAO', 'SAUDE', 'MORADIA', 'TRANSPORTE', 'LAZER', 'OUTROS');

-- CreateTable
CREATE TABLE "despesas" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "categoria" "Categoria" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "despesas_pkey" PRIMARY KEY ("id")
);
