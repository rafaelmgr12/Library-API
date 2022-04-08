import { prisma } from "database/prismaClient";

interface ICreateBook {
  title: string;
  author: string;
  publisher: string;
  genres: string[];
}

export class CreateBookUseCase {
  async execute({ title, author, publisher, genres }: ICreateBook) {
    const book = await prisma.books.create({
      data: {
        title,
        author,
        publisher,
        genres: {
          create: genres.map((genre) => ({
            name: genre,
          })),
        },
      },
    });

    return book;
  }
}
