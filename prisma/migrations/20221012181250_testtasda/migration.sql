-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContactInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "peopleId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "ContactInfo_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "People" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ContactInfo" ("createdAt", "id", "info", "peopleId", "type", "updatedAt") SELECT "createdAt", "id", "info", "peopleId", "type", "updatedAt" FROM "ContactInfo";
DROP TABLE "ContactInfo";
ALTER TABLE "new_ContactInfo" RENAME TO "ContactInfo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
