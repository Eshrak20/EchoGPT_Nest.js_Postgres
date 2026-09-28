-- CreateTable
CREATE TABLE "api_request_logs" (
    "id" UUID NOT NULL,
    "userId" UUID,
    "method" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "statusCode" INTEGER NOT NULL,
    "responseTime" INTEGER NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "api_request_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "api_request_logs_userId_idx" ON "api_request_logs"("userId");

-- CreateIndex
CREATE INDEX "api_request_logs_statusCode_idx" ON "api_request_logs"("statusCode");

-- CreateIndex
CREATE INDEX "api_request_logs_createdAt_idx" ON "api_request_logs"("createdAt");

-- CreateIndex
CREATE INDEX "api_request_logs_path_idx" ON "api_request_logs"("path");
