export interface Question {
    id: number, 
    key: string,
    label: string, 
    theme: string, 
    type: QuestionType,
    options: Option[], 
    optionsType: OptionType,
  }
  
  export interface Option {
    key: OptionKey,
    value: string,
  }
  
  enum OptionType {
    Code = "CODE", 
    Text = "TEXT", 
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