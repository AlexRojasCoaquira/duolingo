export interface Message {
  text: string;
  isUser: boolean;
}

export interface Conversation {
  created_at: string;
  title: string;
  id: string;
  topic_id: string;
}
