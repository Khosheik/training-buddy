export interface Question {
    id: number, 
    questionNumber: string,
    questionText: string, 
    questionType: QuestionType,
    answers: Answer[]
  }
  
  export interface Answer {
    id: AnswerId, 
    answerText: string,
    answerType: AnswerType,
  }
  
  enum AnswerType {
    Code = "code", 
    Text = "span", 
  }
  
  enum AnswerId {
    A = "A", 
    B = "B", 
    C = "C", 
    D = "D"
  }

  enum QuestionType {
    Checkbox = "CHECKBOX", 
    Radio = "RADIO"
  }