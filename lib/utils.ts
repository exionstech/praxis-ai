import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// utils/formatMcqData.ts
export const formatMcqData = (mcqList: any[]) => {
  return mcqList.map((mcqItem) => {
    const parsedMcqs = JSON.parse(mcqItem.mcqs);
    return parsedMcqs.map((mcq: any) => ({
      question: mcq.question,
      options: mcq.options,
      correctAnswer: mcq.correctAnswer,
    }));
  }).flat();
};
