import { MessageBubble } from "./MessageBubble";
import { conversation } from "../mock/conversation";
export const ChatContainer = () => {
  return (
    <div className="w-full bg-[#1D1F1F]">
      <div
        className="
      absolute inset-0
      bg-[#1D1F1F]
      bg-center bg-repeat
      opacity-10
      pointer-events-none
      z-0
    "
        style={{
          backgroundImage:
            "url('https://static.whatsapp.net/rsrc.php/v4/y1/r/m5BEg2K4OR4.png')",
        }}
      ></div>
      <div className="relative z-10 grid grid-rows-[auto_1fr_auto] h-dvh">
        <div className="flex border-b h-20 items-center justify-between bg-[#161717] px-10 shrink-0 fixed w-full">
          <div className="flex gap-5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M7.222 9.897c2.3-2.307 4.548-4.559 6.744-6.754a.65.65 0 0 0 0-.896c-.311-.346-.803-.316-1.027-.08c-2.276 2.282-4.657 4.667-7.143 7.156c-.197.162-.296.354-.296.574c0 .221.099.418.296.592l7.483 7.306a.749.749 0 0 0 1.044-.029c.358-.359.22-.713.058-.881a3407.721 3407.721 0 0 1-7.16-6.988Z"
              />
            </svg>
            <div className="border rounded-full size-10 border-white"></div>
            <div className="text-white">
              <p>Rommel Rojas</p>
              <span className="text-[#81BF84] text-sm">Online</span>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="#ffffff"
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 40"
              fill="#ffffff"
            >
              <g fill="#ffffff">
                <path d="M23.112 9.315a3.113 3.113 0 1 1-6.226.002a3.113 3.113 0 0 1 6.226-.002z" />
                <circle cx="20" cy="19.999" r="3.112" />
                <circle cx="20" cy="30.685" r="3.112" />
              </g>
            </svg>
          </div>
        </div>
        <div className="px-8 flex-1 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {conversation.map((conv) => (
              <MessageBubble isUser={conv.isUser} text={conv.text} />
            ))}
          </div>
        </div>
        <div className="flex gap-4 border-t h-20 items-center justify-center px-10 shrink-0">
          <div className="w-full">
            <input
              className="bg-[#F5F5F5] py-3 px-5 rounded-xl w-full"
              type="text"
              placeholder="Message"
            />
          </div>
          <div className="bg-[#101010] w-15 h-12 rounded-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 256 256"
            >
              <path
                fill="#ffffff"
                d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
