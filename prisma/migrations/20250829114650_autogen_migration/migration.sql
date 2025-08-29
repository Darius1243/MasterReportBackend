-- CreateTable
CREATE TABLE "DocumentType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DocumentType_name_key" ON "DocumentType"("name");
