import { Answer } from "../entities/answer.ts";

export interface AnswerRepository {
  create(answer: Answer): Promise<void>;
}
