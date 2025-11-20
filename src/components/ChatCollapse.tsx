import { useEffect, useState } from "react";
import { useConversation } from "../hooks/useConversation";
import { formatDateTime } from "../utils/date";

export const ChatCollapse = () => {
  const [collapse, setCollapse] = useState(false);
  const { conversationList, getAllConversation } = useConversation();

  useEffect(() => {
    getAllConversation();
  }, []);

  return (
    <div
      className={`max-w-sm bg-[#161717] hidden md:flex transition-all duration-500 h-dvh flex-col ${
        !collapse ? "w-100" : "w-20"
      }`}
    >
      <div
        className={`flex items-center h-20 px-4  ${
          collapse ? "justify-center" : "justify-between"
        }`}
      >
        <h1
          className={`text-white text-2xl block font-semibold transition-all duration-300 ease-in-out overflow-hidden delay-200  ${
            collapse ? "opacity-0" : "opacity-100 "
          }`}
        >
          {collapse ? "" : "Dua lingo"}
        </h1>

        <button
          type="button"
          className="cursor-pointer p-2 rounded-full hover:bg-gray-600/40 transition"
          onClick={() => setCollapse(!collapse)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="#ffffff"
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            />
          </svg>
        </button>
      </div>
      {!collapse && (
        <div className="overflow-y-auto flex-1">
          <div className="relative flex flex-col gap-2 mt-5 px-2 ">
            {conversationList.map((conv) => (
              <div
                key={conv.id}
                className="relative bottom-0 h-18 rounded-xl overflow-hidden p-3 text-white hover:bg-[#2E2F2F] cursor-pointer"
              >
                {conv.title}
                <span className="absolute bottom-2 right-2 font-light text-xs">
                  {formatDateTime(conv.created_at)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
