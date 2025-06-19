/*
  Warnings:

  - You are about to drop the `Object` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Object";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Facility" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Facility_name_key" ON "Facility"("name");
