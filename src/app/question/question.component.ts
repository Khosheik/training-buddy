import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { Question } from './question.types';
import { QuizzService } from '../quizz.service';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'tb-question',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatCheckboxModule, MatRadioModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() question!: Question;

  code = "CODE"; 
  questions: Question[] = this.quizzService.getQuestions(0) as Question[];

  constructor(private quizzService: QuizzService){
  }


}
