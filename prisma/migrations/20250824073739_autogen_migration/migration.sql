-- CreateTable
CREATE TABLE "Outflow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" REAL NOT NULL,
    "date" DATETIME NOT NULL,
    "description" TEXT,
    "personId" INTEGER NOT NULL,
    "facilityId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Outflow_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Outflow_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Outflow_personId_idx" ON "Outflow"("personId");

-- CreateIndex
CREATE INDEX "Outflow_facilityId_idx" ON "Outflow"("facilityId");
