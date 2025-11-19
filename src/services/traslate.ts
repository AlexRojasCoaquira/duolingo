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

export const translateFree = async (text: string): Promise<string> => {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=en|es`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();

    if (!data?.responseData?.translatedText) {
      throw new Error("Translation failed: Missing translatedText");
    }

    return data.responseData.translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return "Translation unavailable";
  }
};
