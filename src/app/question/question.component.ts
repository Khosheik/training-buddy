import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import data from "../questions.json";
import { Question } from './question.types';


@Component({
  selector: 'tb-question',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  questions: Question[] = data as Question[]; 
  code = "CODE"; 
  text = "TEXT"; 

}
