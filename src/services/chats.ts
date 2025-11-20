import { supabase } from "../lib/supabase";
import { type Topic } from "../types/topics";
import type { Conversation, Message } from "../types/chat";

export const getTopics = async () => {
  try {
    const { data, error } = await supabase.from("topics").select("*");
    if (error) throw new Error(error.message);
    return data;
  } catch (error) {
    console.error("❌ Error obtener los tópicos:", (error as Error).message);
    throw new Error("No se pudo obtener los tópicos.");
  }
};

export const createConversation = async (topic: Topic) => {
  try {
    const { data, error } = await supabase
      .from("conversations")
      .insert([
        {
          topic_id: topic.id,
          title: `hablando sobre ${topic.title}`,
        },
      ])
      .select();
    if (error) throw new Error(error.message);
    return data;
  } catch (error) {
    console.error("❌ Error al agregar producto:", (error as Error).message);
    throw new Error("No se pudo agregar el producto. Intenta nuevamente.");
  }
};

export const getConversations = async (): Promise<Conversation[]> => {
  const { data, error } = await supabase.from("conversations").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export const createChat = async (conversationId: string, chat: Message) => {
  try {
    const { data, error } = await supabase
      .from("chats")
      .insert([
        {
          conversation_id: conversationId,
          isuser: chat.isUser,
          message: chat.text,
        },
      ])
      .select();
    if (error) throw new Error(error.message);
    return data;
  } catch (error) {
    console.error("❌ Error al agregar producto:", (error as Error).message);
    throw new Error("No se pudo agregar el producto. Intenta nuevamente.");
  }
};
