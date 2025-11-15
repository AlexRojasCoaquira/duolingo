import { openai } from "../lib/openai";
import type { Topic } from "../types/topics";

export const translateWithOpenAI = (text: string, topic: Topic) => {
  if (!text) return;

  const response = openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: topic.prompt,
      },
      { role: "user", content: text },
    ],
  });
  return response;
};
