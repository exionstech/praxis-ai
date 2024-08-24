interface InputPromptsProps {
  jobPosition: string;
  jobDescription: string;
  jobExperience: string;
  company: string;
  url: string
}

const QUESTION_COUNT = process.env.NEXT_PUBLIC_MAX_QUESTION_COUNT;

export const ScrapperPrompt = ({
  jobDescription,
  jobExperience,
  jobPosition,
  company,
  url
}: InputPromptsProps) => {
  return `Parse the HTML and collect only information about this website ${url}.
    Convert it into a JSON object with the following structure. 
    No explanation needed, don't response anything except the JSON object:
        {
            "books": [
                {
                    "title": $title,
                    "link": $link,
                    "image": $image,
                    "star_rating": $star_rating, (number)
                    "price": $price, (number)
                    "in_stock": $in_stock_status, (boolean)
                },
        }
  `;
};
