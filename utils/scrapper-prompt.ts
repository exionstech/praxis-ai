interface InputPromptsProps {
  jobPosition: string;
  jobDescription: string;
  jobExperience: string;
  company: string;
}

const QUESTION_COUNT = process.env.NEXT_PUBLIC_MAX_QUESTION_COUNT;

interface QuesAns {
  question: string;
  answer: string;
}

let output: QuesAns[];

export const ScrapperPrompt = ({
  jobDescription,
  jobExperience,
  jobPosition,
  company,
}: InputPromptsProps) => {
  return `The questions must be asked from these according to the ${jobPosition} with primary skills in ${jobDescription}, and ${jobExperience} years of experience and only ${QUESTION_COUNT} questions will be given.
   
    The output json format will be:
    
    {
      "question": "",
      "options": [
        {
          "option": "",
          "correct": 
        },
        {
          "option": "",
          "correct": 
        },
        {
          "option": "",
          "correct": 
        },
        {
          "option": "",
          "correct": 
        }
      ],
      "correctAnswer": ""
    }
  `;
};
