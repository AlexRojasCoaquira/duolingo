import type { Topic } from "../types/topics";
import { topics } from "../constants/topics";

interface TopicsProps {
  onSelectTopic: (topic: Topic) => void;
  selectedTopic: Topic | null;
}

export const Topics = ({ onSelectTopic, selectedTopic }: TopicsProps) => {
  return (
    <div className="text-center">
      <p className="text-gray-100">Seleccione el tema de su preferencia...</p>

      <div className="grid grid-cols-2 gap-10 justify-center mt-5">
        {topics.map((topic) => (
          <div
            className="relative cursor-pointer hover:scale-110 transition-all duration-300 group overflow-hidden border rounded-lg border-gray-300  hover:border-amber-300 border-2"
            key={topic.value}
            onClick={() => onSelectTopic(topic)}
          >
            <img
              className="relative  size-35 md:size-40  flex justify-center items-center cursor-pointer bg-center bg-cover"
              src={topic.image}
              alt={topic.name}
            />
            <div
              className="absolute inset-0 bg-gray-900/70 flex items-center justify-center
               translate-x-full group-hover:translate-x-0
               transition-transform duration-500 ease-out"
            >
              <span className="text-xl text-white font-semibold">
                {topic.name}
              </span>
            </div>
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
