import { useState } from "react";

export const ChatCollapse = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div
      className={`max-w-sm bg-[#161717] hidden md:block transition-all duration-500 ${
        !collapse ? "w-100" : "w-20"
      }`}
    >
      <div
        className={`flex items-center h-20 px-4 ${
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
        <div className=" flex flex-col gap-2 mt-5 px-2">
          <div className="h-20  rounded-xl overflow-hidden p-3 text-white hover:bg-[#2E2F2F] cursor-pointer">
            Conversación 1
          </div>
          <div className="h-20  rounded-xl overflow-hidden p-3 text-white hover:bg-[#2E2F2F] cursor-pointer">
            Conversación 2
          </div>
          <div className="h-20  rounded-xl overflow-hidden p-3 text-white hover:bg-[#2E2F2F] cursor-pointer">
            Conversación 3
          </div>
        </div>
      )}
    </div>
  );
};
