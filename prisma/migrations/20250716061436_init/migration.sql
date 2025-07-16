-- CreateTable
CREATE TABLE "Monitor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "interval" INTEGER NOT NULL,
    "timeout" INTEGER NOT NULL,

    CONSTRAINT "Monitor_pkey" PRIMARY KEY ("id")
);
