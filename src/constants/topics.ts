import type { Topic } from "../types/topics";

export const topics: Topic[] = [
  {
    name: "Viajes",
    value: "Travels",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/4f/7d/fc/caption.jpg?w=1200&h=-1&s=1",
    prompt:
      "We’re having a fun, casual travel conversation. Understand my Spanish but answer ONLY in natural, friendly English. Don’t translate or explain anything. Respond like a funny friend giving travel ideas—short, playful, chill. Correct my mistakes subtly inside the answer and always keep the conversation going",
  },
  {
    name: "Comida",
    value: "food",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400",
    prompt:
      "Let's talk only about food; answer in English, correct me softly, and keep the conversation flowing with simple follow-up questions.",
  },
  {
    name: "Animales",
    value: "animals",
    image:
      "https://nationalzoo.si.edu/sites/default/files/styles/square_large/public/2025-01/20241030-817A8773-16RP.jpg?h=f6ccde7b&itok=m27pXZwZ",
    prompt:
      "Let is talk only about animals; answer in English, correct me softly, and keep the conversation going with simple follow-up questions.",
  },
  {
    name: "Música",
    value: "música",
    image:
      "https://i.pinimg.com/736x/84/f1/f0/84f1f0819f62ed6559faabe3504f9842.jpg",
    prompt:
      "Let is talk only about animals; answer in English, correct me softly, and keep the conversation going with simple follow-up questions.",
  },
];
