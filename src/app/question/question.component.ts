import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { Question } from './question.types';
import { QuizzService } from '../quizz.service';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'tb-question',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatCheckboxModule, MatRadioModule, ReactiveFormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() question!: Question;
  questions: Question[] = this.quizzService.getQuestions(0) as Question[];
  form: any;
  isCode: boolean = false;

  constructor(private quizzService: QuizzService, private rootFormGroup: FormGroupDirective){}

  ngOnInit(): void {
    this.form = this.rootFormGroup.form.controls[this.question.key]
    
  }

  checkIfCode(question: Question) {
    return question.optionsType === 'CODE' ? true : false;
  }

}
