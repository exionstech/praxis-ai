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
  return `The questions must be asked from these according to the ${jobPosition} with primary skills in ${jobDescription}, and ${jobExperience} years of experience.

   The questions for ${company} when it is google are :

    - Why do you want to work for Google?
    - Tell me what you know about Googles history.
    - Do you think that using legal names when setting up a Gmail account should be mandatory?
    - How do you think digital marketing will change in the next five years?
    - If you needed to find a given integer in a circularly sorted array of integers, how would you go about it?
    - Do you think Google should be charging for its productivity apps (Google Docs, Google Sheets, etc.)? Why or why not?
    - Tell me something about yourself that you didnt include on your resume.
    - If an extremist video makes its way onto YouTube, how do you think it should be handled?
    - Tell me about a time where you and a manager were in conflict. How did you ultimately resolve the problem?
    - What is multithreaded programming?
    - How would you describe Adwords to someone completely unfamiliar with the product and online advertising?
    - If you were tasked with increasing Gmails user base, what steps would you take to make that happen?
    - Describe a technical issue you once encountered. How did you solve it?
    - Tell me about three non-Google sites that you visit frequently. What do you like about them?
    - How do cookies pass along in HTTP protocol?
    - Explain the function of congestion control in TCP protocol.
    - If an advertiser wasnt seeing the benefit of Adwords due to poor conversions, how would you convince them to stay on board?
    - Pick an app on your phones home screen. What do you like about it? What do you dislike about it?
    - What steps would you take to enhance YouTubes business model?
    - Describe a time where you failed at something. How did you recover?
    - Why do you think that the Google search page is mainly blank?
    - How would you describe a balance sheet to someone who isnt familiar with accounting principles?
    - If you were working with a client who suddenly became hesitant about transitioning to a cloud solution, what steps would you take to put their minds at ease?
    - What is the biggest threat Google faces today?
    - If there was an autosuggest issue for searches in a developing country, what steps would you take to resolve it?
    - Tell me about an area where you believe Google is underinvested.
    - Describe a time when a project was being overwhelmed by scope creep. What steps did you take to get it back on target?
    - Which Google product is your favorite?
    - Is there a Google product that you hate using? If so, why?
    - If you could add a feature to Gmail, what would it be?
    - How will self-driving cars impact transportation, logistics, and daily life?
    - Do you think Google does enough to protect user privacy?
    - Which of the company values do you relate to the most?
    - Tell me about a time when a project stakeholder wanted to head in one direction, but you thought it wasnt the right move. What did you do?
    - Describe the difference between programming and coding?
    - Tell me about a time when you took an existing piece of functional software and updated it.
    - How do you ensure your code is clean and your documentation is thorough?
    - Can you tell me about a time when you set a challenging professional goal and achieved it?
    - Tell me about a time when you set a goal at work and missed the mark.
    - Whats the biggest challenge you faced in your last position? How did you overcome it?
    - What did you learn from your most recent failure at work?
    - If I looked at your browser history right now, what would I learn about your personality?
    - What are you most passionate about outside of work?
    - What steps do you take to stay on top of emerging technology trends?
    - If Google didnt hire you, where else would you be happy working?
    - Tell me about a time when you stepped up as a leader even though you werent officially in a leadership role.
    - Whats the most valuable feedback youve ever received?
    
    Format the output to return only an array in a JSON Format where question must be stored in question key and answer must be stored in answer key which stores questions from above set of questions according to ${jobDescription} and ${jobPosition} from the above questions and also other highly possible ones from the internet in a random order. Total questions must be ${QUESTION_COUNT} in the output.

    Convert it to json in this format:
    
        [
          {
            question: "",
            answer: ""
          },
          {
            question: "",
            answer: ""
          },
          {
            question: "",
            answer: ""
          },
          {
            question: "",
            answer: ""
          },
          {
            question: "",
            answer: ""
          }
        ]

    `;
};
