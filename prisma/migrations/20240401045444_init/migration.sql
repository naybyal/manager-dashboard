-- CreateTable
CREATE TABLE "Services" (
    "serviceId" SERIAL NOT NULL,
    "serviceName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serviceCost" INTEGER NOT NULL,
    "serviceProfit" INTEGER NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("serviceId")
);
