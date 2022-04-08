import { Request, Response } from "express";

import { CreateBookUseCase } from "./CreateBookUseCase";

export class CreateBookController {
  async handle(req: Request, res: Response) {
    try {
      const { title, author, publisher, genres } = req.body;
      const useCase = new CreateBookUseCase();
      const book = await useCase.execute({ title, author, publisher, genres });
      res.send(book);
    } catch (err: any) {
      res.status(400).send({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
