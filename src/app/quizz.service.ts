import { Injectable } from '@angular/core';
import data from "./questions.json";
import { Question } from './question/question.types';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  questions: Question[] = data as Question[]; 


  constructor() { }
}
