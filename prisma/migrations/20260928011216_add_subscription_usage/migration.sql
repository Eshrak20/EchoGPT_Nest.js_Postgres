-- CreateTable
CREATE TABLE "subscription_usages" (
    "id" UUID NOT NULL,
    "subscriptionId" UUID NOT NULL,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "requestCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscription_usages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "subscription_usages_subscriptionId_idx" ON "subscription_usages"("subscriptionId");

-- CreateIndex
CREATE INDEX "subscription_usages_periodStart_idx" ON "subscription_usages"("periodStart");

-- CreateIndex
CREATE UNIQUE INDEX "subscription_usages_subscriptionId_periodStart_key" ON "subscription_usages"("subscriptionId", "periodStart");

-- AddForeignKey
ALTER TABLE "subscription_usages" ADD CONSTRAINT "subscription_usages_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
