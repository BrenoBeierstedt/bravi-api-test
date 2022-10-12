-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_People" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_People" ("createdAt", "firstName", "id", "lastName", "updatedAt") SELECT "createdAt", "firstName", "id", "lastName", "updatedAt" FROM "People";
DROP TABLE "People";
ALTER TABLE "new_People" RENAME TO "People";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
