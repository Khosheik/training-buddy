export interface Question {
    id: number, 
    questionText: string, 
    questionType: QuestionType,
    answers: Answer[]
  }
  
  interface Answer {
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