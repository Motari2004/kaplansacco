-- CreateTable
CREATE TABLE "Withdrawal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "method" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "bankName" TEXT,
    "accountNumber" TEXT,
    "accountName" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "reference" TEXT,
    "processedBy" TEXT,
    "processedAt" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Withdrawal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Withdrawal_reference_key" ON "Withdrawal"("reference");

-- AddForeignKey
ALTER TABLE "Withdrawal" ADD CONSTRAINT "Withdrawal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
