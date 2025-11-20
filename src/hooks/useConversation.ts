import { useState } from "react";
import { getConversations } from "../services/chats";
import { type Conversation } from "../types/chat";

export const useConversation = () => {
  const [conversationList, setConvertionList] = useState<Conversation[]>([]);
  const getAllConversation = async () => {
    const res = await getConversations();
    setConvertionList(res.reverse());
  };

  return {
    getAllConversation,
    conversationList,
  };
};
