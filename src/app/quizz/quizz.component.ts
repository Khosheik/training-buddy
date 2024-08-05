import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { QuestionComponent } from '../question/question.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { QuizzService } from '../quizz.service';
import { Question, Option } from '../question/question.types';
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
export class QuizzComponent implements OnInit {
  questions: Question[] | null = this.quizzService.getQuestions(0);
  quizzName: string | null = this.quizzService.getQuizzTitle(0);
  questionAndFormGroupArray: QuestionAndFromGroup[] = [];
  isEditable = false;

  question1: any = this.fb.group({
    question1ACtrl: [false],
    question1BCtrl: [false],
    question1CCtrl: [false],
    question1DCtrl: [false],
  }); 
  question2: any = this.fb.group({
    question2ACtrl: [false],
    question2BCtrl: [false],
    question2CCtrl: [false],
    question2DCtrl: [false],
  }); 
  
  quizzForm: FormGroup = this.fb.group({
    question1: this.question1, 
    question2: this.question2,
  });


  constructor(private quizzService: QuizzService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createQuestionAndFormGroupArray(this.questions);
    //this.createQuizzForm(this.questionAndFormGroupArray)
  }

  createControls(options: Option[], questionKey: string) {
    let controlsNameList = {}
    for(const option of options) {
      const nameControl = `${option.key}Ctrl`;
      controlsNameList = {
        ...controlsNameList, 
        [nameControl]: [null],
      }
    }
    return controlsNameList;
  }

  createQuestionAndFormGroupArray(questions: Question[] | null): void {
    if(questions){
      for(const question of questions){
        const formGroup =  this.fb.group(this.createControls(question.options, question.key));
        this.questionAndFormGroupArray.push({
          question, 
          formGroup,
        })
      }
    }
  }

  submit(value:any){
    console.log("SUBMITTED")
    console.log(value)
  }


  createQuizzForm(questionAndFromGroupArray: any) {
    let formGroups = {}; 

    for(let questionAndFormGroup of questionAndFromGroupArray) {
      const formGroupName = questionAndFormGroup.question.key;
      const formGroupControls = questionAndFormGroup.formGroup.controls;
      formGroups = {
        ...formGroups, 
        [formGroupName]: this.fb.group(formGroupControls)
      }
    }

    this.quizzForm = this.fb.group(formGroups)
    console.log(this.quizzForm)

    }
  }
