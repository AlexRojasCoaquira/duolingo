interface MessageBubble {
  isUser?: boolean;
  text: string;
}
export const MessageBubble = ({ isUser, text }: MessageBubble) => {
  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] p-2 md:p-3 rounded-2xl text-white
          ${
            isUser
              ? "bg-[#81BF84] rounded-br-none"
              : "bg-gray-400 rounded-bl-none"
          }
        `}
      >
        {text}
      </div>
    </div>
  );
};
