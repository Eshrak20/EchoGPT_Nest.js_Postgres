-- AlterTable
ALTER TABLE "providers" ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "providers_isDefault_idx" ON "providers"("isDefault");
