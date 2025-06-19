/*
  Warnings:

  - Added the required column `facilityId` to the `Inflow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobId` to the `Inflow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personId` to the `Inflow` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Inflow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" REAL NOT NULL,
    "date" DATETIME NOT NULL,
    "description" TEXT,
    "personId" INTEGER NOT NULL,
    "facilityId" INTEGER NOT NULL,
    "jobId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Inflow_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inflow_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inflow_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Inflow" ("amount", "createdAt", "date", "description", "id", "updatedAt") SELECT "amount", "createdAt", "date", "description", "id", "updatedAt" FROM "Inflow";
DROP TABLE "Inflow";
ALTER TABLE "new_Inflow" RENAME TO "Inflow";
CREATE INDEX "Inflow_personId_idx" ON "Inflow"("personId");
CREATE INDEX "Inflow_facilityId_idx" ON "Inflow"("facilityId");
CREATE INDEX "Inflow_jobId_idx" ON "Inflow"("jobId");
CREATE TABLE "new_Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);
INSERT INTO "new_Person" ("email", "id", "name") SELECT "email", "id", "name" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
