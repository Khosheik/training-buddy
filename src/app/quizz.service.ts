import { Injectable } from '@angular/core';
import data from "./questions.json";
import { Question } from './question/question.types';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  getQuestions(quizzId: number): Question[] | null {
    for (const datum of data) {
      if (quizzId === datum.quizzId) {
        return datum.questions as Question[];
      }
    }
    return null;
  };

  getQuizzTitle(quizzId: number): string | null {
    for (const datum of data) {
      if (quizzId === datum.quizzId) {
        return datum.quizzName;
      }
    }
    return null;
  };
}
