-- CreateTable
CREATE TABLE "Alert" (
    "id" SERIAL NOT NULL,
    "monitorId" INTEGER NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);
