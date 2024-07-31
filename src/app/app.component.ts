import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizzComponent } from "./quizz/quizz.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuizzComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'training-buddy';
}
