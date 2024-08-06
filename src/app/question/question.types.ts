export interface Question {
    id: number, 
    key: string,
    label: string, 
    theme: string, 
    type: QuestionType,
    options: Option[]
  }
  
  export interface Option {
    key: OptionKey,
    value: string,
    type: OptionType,
  }
  
  enum OptionType {
    Code = "code", 
    Text = "span", 
  }
  
  enum OptionKey {
    A = "A", 
    B = "B", 
    C = "C", 
    D = "D"
  }

  enum QuestionType {
    Checkbox = "CHECKBOX", 
    Radio = "RADIO"
  }