import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { QuestionComponent } from '../question/question.component';
import { QuizzService } from '../quizz.service';
import { Question, Answer } from '../question/question.types';

interface QuestionAndFromGroup {
  question: Question, 
  formGroup: UntypedFormGroup,
}

@Component({
  selector: 'tb-quizz',
  standalone: true,
  imports: [
    QuestionComponent,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})
export class QuizzComponent {
  questions: Question[] = this.quizzService.questions;
  questionAndFormGroupArray: QuestionAndFromGroup[] = [];
  isEditable = false;

  constructor(private quizzService: QuizzService, private fb: FormBuilder) { 
    this.createQuestionAndFormGroupArray(this.questions);
  }

  createControls(answers: Answer[], questionNumber: string) {
    let controlsNameList = {}
    for(const answer of answers) {
      const nameControl = `${questionNumber}${answer.id}Ctrl`;
      controlsNameList = {
        ...controlsNameList, 
        [nameControl]: [null, Validators.required],
      }
    }
    return controlsNameList;
  }

  createQuestionAndFormGroupArray(questions: Question[]): void {
    for(const question of questions){
      this.questionAndFormGroupArray
      this.questionAndFormGroupArray.push({
        question, 
        formGroup: this.fb.group(this.createControls(question.answers, question.questionNumber))
      })
    }
  }

}
