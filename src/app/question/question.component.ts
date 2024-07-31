import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Question } from './question.types';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'tb-question',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatCheckboxModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() question!: Question;
  code = "CODE"; 
  questions: Question[] = this.quizzService.questions;

  constructor(private quizzService: QuizzService){}

}
