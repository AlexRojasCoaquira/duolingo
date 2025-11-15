import type { Topic } from "../types/topics";
import { topics } from "../constants/topics";

interface TopicsProps {
  onSelectTopic: (topic: Topic) => void;
  selectedTopic: Topic | null;
}

export const Topics = ({ onSelectTopic, selectedTopic }: TopicsProps) => {
  return (
    <div className="text-center">
      <div className="flex gap-5 justify-center mt-5">
        {topics.map((topic) => (
          <div
            key={topic.value}
            onClick={() => onSelectTopic(topic)}
            className="border size-30 md:size-40 rounded-lg flex justify-center items-center bg-green-500 hover:bg-green-400 cursor-pointer"
          >
            <span className="text-xl text-white font-semibold">
              {topic.name}
            </span>
          </div>
        ))}
      </div>
      {selectedTopic && (
        <div className="mt-2 text-white">
          Seleccionado: {selectedTopic.name}
        </div>
      )}
    </div>
  );
};
