-- CreateTable
CREATE TABLE "search_history" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "query" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "search_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "search_cache" (
    "id" UUID NOT NULL,
    "query" TEXT NOT NULL,
    "results" JSONB NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "search_cache_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "search_history_userId_idx" ON "search_history"("userId");

-- CreateIndex
CREATE INDEX "search_history_userId_createdAt_idx" ON "search_history"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "search_cache_query_key" ON "search_cache"("query");

-- CreateIndex
CREATE INDEX "search_cache_expiresAt_idx" ON "search_cache"("expiresAt");

-- AddForeignKey
ALTER TABLE "search_history" ADD CONSTRAINT "search_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
