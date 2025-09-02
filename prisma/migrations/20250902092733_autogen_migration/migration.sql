-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Outflow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" REAL NOT NULL,
    "date" DATETIME NOT NULL,
    "description" TEXT,
    "personId" INTEGER NOT NULL,
    "facilityId" INTEGER NOT NULL,
    "jobId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Outflow_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Outflow_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Outflow_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Outflow" ("amount", "createdAt", "date", "description", "facilityId", "id", "personId", "updatedAt") SELECT "amount", "createdAt", "date", "description", "facilityId", "id", "personId", "updatedAt" FROM "Outflow";
DROP TABLE "Outflow";
ALTER TABLE "new_Outflow" RENAME TO "Outflow";
CREATE INDEX "Outflow_personId_idx" ON "Outflow"("personId");
CREATE INDEX "Outflow_facilityId_idx" ON "Outflow"("facilityId");
CREATE INDEX "Outflow_jobId_idx" ON "Outflow"("jobId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
