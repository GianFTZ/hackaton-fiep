-- CreateTable
CREATE TABLE "Doctor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT,
    "day" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NodeInterval" (
    "id" TEXT NOT NULL,
    "scheduleId" TEXT,

    CONSTRAINT "NodeInterval_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Window" (
    "id" TEXT NOT NULL,
    "claimedBy" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Window_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NodeInterval" ADD CONSTRAINT "NodeInterval_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Window" ADD CONSTRAINT "Window_claimedBy_fkey" FOREIGN KEY ("claimedBy") REFERENCES "NodeInterval"("id") ON DELETE SET NULL ON UPDATE CASCADE;
