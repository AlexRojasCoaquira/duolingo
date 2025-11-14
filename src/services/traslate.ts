import { openai } from "../lib/openai";

export const translateWithOpenAI = (text: string) => {
  if (!text) return;
  const response = openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: "You are a translation assistant." },
      { role: "user", content: `Traduce esto al inglés: ${text}` },
    ],
  });
  return response;
};
