import type { Topic } from "../types/topics";

export const topics: Topic[] = [
  {
    name: "Viajes",
    value: "Travels",
    prompt:
      "We’re having a fun, casual travel conversation. Understand my Spanish but answer ONLY in natural, friendly English. Don’t translate or explain anything. Respond like a funny friend giving travel ideas—short, playful, chill. Correct my mistakes subtly inside the answer and always keep the conversation going",
  },
  {
    name: "Comida",
    value: "food",
    prompt:
      "Let's talk only about food; answer in English, correct me softly, and keep the conversation flowing with simple follow-up questions.",
  },
  {
    name: "Animales",
    value: "animals",
    prompt:
      "Let is talk only about animals; answer in English, correct me softly, and keep the conversation going with simple follow-up questions.",
  },
];
