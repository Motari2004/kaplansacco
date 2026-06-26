-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "memberNumber" TEXT NOT NULL,
    "monthlyContribution" DOUBLE PRECISION NOT NULL DEFAULT 1000,
    "shares" INTEGER NOT NULL DEFAULT 0,
    "savingsBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "role" TEXT NOT NULL DEFAULT 'MEMBER',
    "physicalAddress" TEXT,
    "postalAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loan" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "interestRate" DOUBLE PRECISION NOT NULL DEFAULT 0.12,
    "totalRepayable" DOUBLE PRECISION NOT NULL,
    "monthlyInstallment" DOUBLE PRECISION NOT NULL,
    "termMonths" INTEGER NOT NULL DEFAULT 36,
    "purpose" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "approvalDate" TIMESTAMP(3),
    "disbursementDate" TIMESTAMP(3),
    "dueDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanPayment" (
    "id" TEXT NOT NULL,
    "loanId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "receiptNo" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'COMPLETED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoanPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "reference" TEXT,
    "status" TEXT NOT NULL DEFAULT 'COMPLETED',
    "receiptNo" TEXT,
    "processedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contribution" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "month" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paidDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PAID',
    "receiptNo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contribution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_idNumber_key" ON "User"("idNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_memberNumber_key" ON "User"("memberNumber");

-- CreateIndex
CREATE UNIQUE INDEX "LoanPayment_receiptNo_key" ON "LoanPayment"("receiptNo");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_reference_key" ON "Transaction"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_receiptNo_key" ON "Transaction"("receiptNo");

-- CreateIndex
CREATE UNIQUE INDEX "Contribution_receiptNo_key" ON "Contribution"("receiptNo");

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanPayment" ADD CONSTRAINT "LoanPayment_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
