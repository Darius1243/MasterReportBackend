-- CreateTable
CREATE TABLE "Object" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Object_name_key" ON "Object"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Job_name_key" ON "Job"("name");
