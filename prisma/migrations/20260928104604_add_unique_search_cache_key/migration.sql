/*
  Warnings:

  - A unique constraint covering the columns `[cacheKey]` on the table `search_cache` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cacheKey` to the `search_cache` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "search_cache" ADD COLUMN     "cacheKey" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "search_cache_cacheKey_key" ON "search_cache"("cacheKey");
