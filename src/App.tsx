import { useState } from "react";
import { Topics } from "./components/Topics";
import type { Topic } from "./types/topics";
import { ChatContainer } from "./components/ChatContainer";
import { Ticker } from "./components/Ticker";
import { createConversation } from "./services/chats";

function App() {
  const [topic, setTopic] = useState<Topic | null>(null);
  const [conversation, setConversation] = useState("");

  const selectTopic = async (topic: Topic) => {
    const res = await createConversation(topic);
    setConversation(res[0].id);
    setTopic(topic);
  };

  return (
    <>
      {topic ? (
        <ChatContainer
          resetTopic={() => setTopic(null)}
          topic={topic}
          conversation={conversation}
        ></ChatContainer>
      ) : (
        <>
          <div className="bg-gray-900 min-h-dvh p-5 h-full">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-5 h-full">
              <h1 className="text-3xl text-white text-center font-semibold">
                Dua lingo
              </h1>
              <Topics selectedTopic={topic} onSelectTopic={selectTopic} />
              <div className="w-sm">
                <Ticker />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
