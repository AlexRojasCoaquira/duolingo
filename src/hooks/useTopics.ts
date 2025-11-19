import { getTopics } from "../services/chats";
import { useState } from "react";
import type { Topic } from "../types/topics";

export const useTopics = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const getAllTopics = async () => {
    const res = await getTopics();
    setTopics(res);
  };
  return {
    getAllTopics,
    topics,
  };
};
