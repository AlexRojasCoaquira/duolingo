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

export const translateWithLibreTranslate = (text: string) => {
  fetch("https://libretranslate.com/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: text,
      source: "es",
      target: "en",
      format: "text",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data.translatedText));
};
