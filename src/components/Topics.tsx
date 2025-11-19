import type { Topic } from "../types/topics";
// import { topics } from "../constants/topics";
import { useTopics } from "../hooks/useTopics";
import { useEffect } from "react";

interface TopicsProps {
  onSelectTopic: (topic: Topic) => void;
  selectedTopic: Topic | null;
}

export const Topics = ({ onSelectTopic, selectedTopic }: TopicsProps) => {
  const { topics, getAllTopics, loading } = useTopics();
  useEffect(() => {
    getAllTopics();
  }, []);

  return (
    <div className="text-center">
      <p className="text-gray-100">Seleccione el tema de su preferencia...</p>
      {loading && (
        <div
          className={`flex items-center justify-center w-full backdrop-blur-sm mt-5
         transition-all${
           loading ? "opacity-100" : "opacity-0 pointer-events-none"
         }`}
        >
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-10 justify-center mt-5">
        {!loading &&
          topics &&
          topics.map((topic) => (
            <div
              className="relative cursor-pointer hover:scale-110 transition-all duration-300 group overflow-hidden rounded-lg border-gray-300  hover:border-amber-300 border-2"
              key={topic.slug}
              onClick={() => onSelectTopic(topic)}
            >
              <img
                className="relative  size-35 md:size-40  flex justify-center items-center cursor-pointer bg-center bg-cover"
                src={topic.image}
                alt={topic.title}
              />
              <div
                className="absolute inset-0 bg-gray-900/70 flex items-center justify-center
               translate-x-full group-hover:translate-x-0
               transition-transform duration-500 ease-out"
              >
                <span className="text-xl text-white font-semibold">
                  {topic.title}
                </span>
              </div>
            </div>
          ))}
      </div>
      {selectedTopic && (
        <div className="mt-2 text-white">
          Seleccionado: {selectedTopic.title}
        </div>
      )}
    </div>
  );
};
