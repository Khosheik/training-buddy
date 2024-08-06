import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { QuestionComponent } from '../question/question.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QuizzService } from '../quizz.service';
import { Question } from '../question/question.types';
import { FormGroupPipe } from '../form-group.pipe';

interface QuestionFormGroups {
  [name: string]: FormGroup
}

@Component({
  selector: 'tb-quizz',
  standalone: true,
  imports: [
    QuestionComponent,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormGroupPipe
  ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss',
})
export class QuizzComponent {
  //will be given as imput later
  questions: Question[] | null = this.quizzService.getQuestions(0);
  quizzName: string | null = this.quizzService.getQuizzTitle(0);

  questionFormGroups: QuestionFormGroups = {};
  quizzForm!: FormGroup;

  constructor(private quizzService: QuizzService, private fb: FormBuilder) {
    if (this.questions) {
      this.createQuestionFormGroups(this.questions);
      this.makeQuizzForm();
      this.addControls(this.questions, this.questionFormGroups);

    }
  }

  submit(value: any) {
    console.log('Submitted', value)
  }

  addControls(questions: Question[], questionFormGroups: any) {
    for (const question of questions) {
      if (question.type === "CHECKBOX") {
        for (const option of question.options) {
          questionFormGroups[question.key].addControl(`${question.key}${option.key}Ctrl`, new FormControl(false))
        }
      } else if (question.type === "RADIO") {
        questionFormGroups[question.key].addControl(`${question.key}`, new FormControl(false))
      }
    }


    console.log('quizzform', this.quizzForm)
  }

  createQuestionFormGroups(questions: Question[]) {
    for (const question of questions) {
      this.questionFormGroups = {
        ...this.questionFormGroups,
        [question.key]: this.fb.group({})
      }
    }
  }

  makeQuizzForm() {
    this.quizzForm = this.fb.group(this.questionFormGroups)
  }
}

