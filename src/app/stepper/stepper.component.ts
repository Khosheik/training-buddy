import { Component, Input } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { QuestionComponent } from "../question/question.component";
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { QuizzService } from '../quizz.service';
import {MatButtonModule} from '@angular/material/button'; 
import { ReactiveFormsModule } from '@angular/forms';
import { Question } from '../question/question.types';


@Component({
  selector: 'tb-stepper',
  standalone: true,
  imports: [MatStepperModule, QuestionComponent, MatButtonModule, ReactiveFormsModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  questions = this.quizzService.getQuestions(0)
  
  constructor(private quizzService: QuizzService, private rootFormGroup: FormGroupDirective){
  }

  getFormGroup(question: Question){
    return this.rootFormGroup.form.controls[question.key]
  }
}
