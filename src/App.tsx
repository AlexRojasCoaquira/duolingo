import { useState } from "react";
import { Topics } from "./components/Topics";
import type { Topic } from "./types/topics";
import { ChatContainer } from "./components/ChatContainer";

function App() {
  const [topic, setTopic] = useState<Topic | null>(null);
  const selectTopic = (topic: Topic) => {
    setTopic(topic);
  };

  return (
    <>
      {topic ? (
        <ChatContainer
          resetTopic={() => setTopic(null)}
          topic={topic}
        ></ChatContainer>
      ) : (
        <>
          <div className="bg-gray-900 min-h-dvh p-5">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
              <h1 className="text-3xl text-white text-center font-semibold">
                Dua lingo
              </h1>
              <Topics selectedTopic={topic} onSelectTopic={selectTopic} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
