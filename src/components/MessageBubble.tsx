import { useState } from "react";
import { textToSpeech } from "../services/evenlabs";
import { translateFree } from "../services/traslate";
interface MessageBubble {
  isUser?: boolean;
  text: string;
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Error copiando al portapapeles:", err);
    return false;
  }
};

export const MessageBubble = ({ isUser, text }: MessageBubble) => {
  const [open, setOpen] = useState(false);
  const [textTraslated, setTextTraslate] = useState("");

  const traslateToSpanish = async (text: string) => {
    const res = await translateFree(text);
    setTextTraslate(res);
  };
  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] p-2 md:p-3 rounded-2xl text-white flex gap-2 items-center relative group
          ${
            isUser
              ? "bg-[#81BF84] rounded-br-none"
              : "bg-gray-400 rounded-bl-none"
          }
        `}
      >
        <div className="">
          <p className="mr-5">{text}</p>
          {textTraslated && (
            <p className="italic font-semibold text-sm leading-4 mt-3 text-gray-700">
              -{textTraslated}
            </p>
          )}
        </div>

        {!isUser && (
          <div className={`relative opacity-0 group-hover:opacity-100 `}>
            <span
              className="pointer-events-auto cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <svg viewBox="0 0 20 20" height="20" width="20" fill="none">
                <title>ic-chevron-down-menu</title>
                <path
                  d="M9.99971 12.1L14.8997 7.2C15.083 7.01667 15.3164 6.925 15.5997 6.925C15.883 6.925 16.1164 7.01667 16.2997 7.2C16.483 7.38333 16.5747 7.61667 16.5747 7.9C16.5747 8.18333 16.483 8.41667 16.2997 8.6L10.6997 14.2C10.4997 14.4 10.2664 14.5 9.99971 14.5C9.73304 14.5 9.49971 14.4 9.29971 14.2L3.69971 8.6C3.51637 8.41667 3.42471 8.18333 3.42471 7.9C3.42471 7.61667 3.51637 7.38333 3.69971 7.2C3.88304 7.01667 4.11637 6.925 4.39971 6.925C4.68304 6.925 4.91637 7.01667 5.09971 7.2L9.99971 12.1Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            {open && (
              <div className="absolute top-10 -left-5 bg-[#1D1F1F] p-2 rounded-xl ">
                <ul className="w-40 text-[#dad7d7] font-semibold">
                  <li
                    className="py-2 px-3 hover:bg-[#343636] rounded-lg cursor-pointer"
                    onClick={() => textToSpeech(text)}
                  >
                    <div className="flex gap-2 items-center">
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
                      Escuchar
                    </div>
                  </li>
                  <li
                    className="py-2 px-3 hover:bg-[#343636] rounded-lg cursor-pointer"
                    onClick={() => traslateToSpanish(text)}
                  >
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="#ffffff"
                          d="m7.41 9l2.24 2.24l-.83 2L6 10.4l-3.3 3.3l-1.4-1.42L4.58 9l-.88-.88c-.53-.53-1-1.3-1.3-2.12h2.2c.15.28.33.53.51.7l.89.9l.88-.88C7.48 6.1 8 4.84 8 4H0V2h5V0h2v2h5v2h-2c0 1.37-.74 3.15-1.7 4.12L7.4 9zm3.84 8L10 20H8l5-12h2l5 12h-2l-1.25-3h-5.5zm.83-2h3.84L14 10.4L12.08 15z"
                        />
                      </svg>
                      Traducir
                    </div>
                  </li>
                  <li
                    className="py-2 px-3 hover:bg-[#343636] rounded-lg cursor-pointer"
                    onClick={() => copyToClipboard(text)}
                  >
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="#ffffff"
                          d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2z"
                        />
                      </svg>
                      Copiar
                    </div>
                  </li>
                  <li
                    className="py-2 px-3 hover:bg-[#343636] rounded-lg cursor-pointer"
                    onClick={() => textToSpeech(text)}
                  >
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="#ffffff"
                          d="m7.41 9l2.24 2.24l-.83 2L6 10.4l-3.3 3.3l-1.4-1.42L4.58 9l-.88-.88c-.53-.53-1-1.3-1.3-2.12h2.2c.15.28.33.53.51.7l.89.9l.88-.88C7.48 6.1 8 4.84 8 4H0V2h5V0h2v2h5v2h-2c0 1.37-.74 3.15-1.7 4.12L7.4 9zm3.84 8L10 20H8l5-12h2l5 12h-2l-1.25-3h-5.5zm.83-2h3.84L14 10.4L12.08 15z"
                        />
                      </svg>
                      Escuchar
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
        {/* {!isUser && (
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
        )} */}
      </div>
    </div>
  );
};
