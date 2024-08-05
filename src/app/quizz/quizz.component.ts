import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { QuestionComponent } from '../question/question.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QuizzService } from '../quizz.service';
import { Question } from '../question/question.types';
import { FormGroupPipe } from '../form-group.pipe';

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

  question1: UntypedFormGroup = this.fb.group({});
  question2: UntypedFormGroup = this.fb.group({});

  quizzForm = this.fb.group({
    question1: this.question1,
    question2: this.question2,
  });


  constructor(private quizzService: QuizzService, private fb: FormBuilder) {
    this.addControls(this.questions)
  }

  submit(value: any) {
    console.log("SUBMITTED")
    console.log(value)
  }

  addControls(questions: Question[] | null) {
    if (questions) {
      for (const question of questions) {
        for (const option of question.options) {

          if (option.key.includes('question1')) {
            this.question1.addControl(`${option.key}Ctrl`, new FormControl(false))
          } else {
            this.question2.addControl(`${option.key}Ctrl`, new FormControl(false))
          }
        }

      }
    }

    console.log(this.quizzForm)
  }

}
