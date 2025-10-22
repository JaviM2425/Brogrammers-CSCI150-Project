/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "height" DOUBLE PRECISION,
ADD COLUMN     "userID" SERIAL NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userID");

-- CreateTable
CREATE TABLE "WeightLog" (
    "logID" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "WeightLog_pkey" PRIMARY KEY ("logID")
);

-- CreateTable
CREATE TABLE "WorkoutLog" (
    "logID" SERIAL NOT NULL,
    "planName" TEXT,
    "exerciseName" TEXT NOT NULL,
    "sets" INTEGER,
    "reps" INTEGER,
    "weight" DOUBLE PRECISION,
    "date" TIMESTAMP(3) NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "WorkoutLog_pkey" PRIMARY KEY ("logID")
);

-- CreateTable
CREATE TABLE "StepRecord" (
    "recordID" SERIAL NOT NULL,
    "stepsCount" INTEGER NOT NULL,
    "distance" DOUBLE PRECISION,
    "calories" DOUBLE PRECISION,
    "date" TIMESTAMP(3) NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "StepRecord_pkey" PRIMARY KEY ("recordID")
);

-- CreateTable
CREATE TABLE "WorkoutRecommendation" (
    "recommendationID" SERIAL NOT NULL,
    "planName" TEXT NOT NULL,
    "workoutType" TEXT[],
    "description" TEXT NOT NULL,

    CONSTRAINT "WorkoutRecommendation_pkey" PRIMARY KEY ("recommendationID")
);

-- CreateTable
CREATE TABLE "FitHealthTipAPI" (
    "id" SERIAL NOT NULL,
    "APIName" TEXT NOT NULL,
    "connected" BOOLEAN NOT NULL DEFAULT false,
    "lastChecked" TIMESTAMP(3),

    CONSTRAINT "FitHealthTipAPI_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WeightLog" ADD CONSTRAINT "WeightLog_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutLog" ADD CONSTRAINT "WorkoutLog_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StepRecord" ADD CONSTRAINT "StepRecord_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
