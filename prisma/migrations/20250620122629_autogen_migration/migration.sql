/*
  Warnings:

  - Made the column `name` on table `Person` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT
);
INSERT INTO "new_Person" ("email", "id", "name") SELECT "email", "id", "name" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
CREATE UNIQUE INDEX "Person_name_key" ON "Person"("name");
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
