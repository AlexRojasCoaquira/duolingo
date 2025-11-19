import { textToSpeech } from "../services/evenlabs";

interface MessageBubble {
  isUser?: boolean;
  text: string;
}

export const MessageBubble = ({ isUser, text }: MessageBubble) => {
  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] p-2 md:p-3 rounded-2xl text-white flex gap-2 items-center
          ${
            isUser
              ? "bg-[#81BF84] rounded-br-none"
              : "bg-gray-400 rounded-bl-none"
          }
        `}
      >
        {!isUser && (
          <button
            type="button"
            className="flex justify-end items-center mt-2 cursor-pointer"
            onClick={() => textToSpeech(text)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M426.7 256c0-71-43.4-131.8-105-157.5l-16.4 39.4C351.5 157.2 384 202.8 384 256c0 53.3-32.5 98.8-78.8 118.1l16.4 39.4C383.3 387.8 426.7 327 426.7 256zm-85.4 0c0-35.5-21.7-65.9-52.5-78.7l-16.4 39.4c15.4 6.4 26.2 21.6 26.2 39.4c0 17.7-10.8 32.9-26.2 39.4l16.4 39.4c30.8-13 52.5-43.4 52.5-78.9zm13.2-236.3L338 59.1C415.1 91.2 469.3 167.2 469.3 256c0 88.7-54.2 164.8-131.3 196.9l16.4 39.4C447 453.7 512 362.5 512 256S447 58.3 354.5 19.7zM0 149.3v213.3h85.3L234.7 512V0L85.3 149.3H0z"
              />
            </svg>
          </button>
        )}
        <p>{text}</p>
      </div>
    </div>
  );
};
