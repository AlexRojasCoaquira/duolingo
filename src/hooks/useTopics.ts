import { getTopics } from "../services/chats";
import { useState } from "react";
import type { Topic } from "../types/topics";

export const useTopics = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const getAllTopics = async () => {
    const res = await getTopics();
    setTopics(res);
    setLoading(false);
  };
  return {
    getAllTopics,
    topics,
    loading,
  };
};
