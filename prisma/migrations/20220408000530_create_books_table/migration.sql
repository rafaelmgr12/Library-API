-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "published" TEXT NOT NULL,
    "genres" TEXT[],

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
