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
    "jobId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Inflow_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inflow_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inflow_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Inflow" ("amount", "createdAt", "date", "description", "facilityId", "id", "jobId", "personId", "updatedAt") SELECT "amount", "createdAt", "date", "description", "facilityId", "id", "jobId", "personId", "updatedAt" FROM "Inflow";
DROP TABLE "Inflow";
ALTER TABLE "new_Inflow" RENAME TO "Inflow";
CREATE INDEX "Inflow_personId_idx" ON "Inflow"("personId");
CREATE INDEX "Inflow_facilityId_idx" ON "Inflow"("facilityId");
CREATE INDEX "Inflow_jobId_idx" ON "Inflow"("jobId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
