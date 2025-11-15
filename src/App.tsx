import { useEffect, useRef, useState } from "react";
// import VoiceVisualizer from "./components/VoiceVisualizer";
import { translateWithOpenAI } from "./services/traslate";
import { textToSpeech } from "./services/evenlabs";
import { Topics } from "./components/Topics";
import type { Topic } from "./types/topics";

function App() {
  const [text, setText] = useState("");
  const [textTraslated, setTextTraslated] = useState("");
  const [loading, setLoading] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [topic, setTopic] = useState<Topic | null>(null);

  const startListening = () => {
    setText("");
    setTextTraslated("");
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Tu navegador no soporta reconocimiento de voz 😢");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "es-PE";
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setLoading(true);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Error de reconocimiento:", event.error);
      setLoading(false);
    };

    // recognition.onend = () => {
    //   console.log("Reconocimiento terminado");
    //   stopListening();
    // };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = async () => {
    recognitionRef.current?.stop();
  };

  useEffect(() => {
    const traslate = async () => {
      if (!topic || !text) return;
      const response = await translateWithOpenAI(text, topic);
      console.log("response", response);
      const translated = response?.choices?.[0]?.message?.content?.trim() || "";
      setTextTraslated(translated);
      setLoading(false);
      textToSpeech(translated);
    };
    traslate();
  }, [text, topic]);

  return (
    <div className="bg-gray-900 min-h-dvh p-5">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <h1 className="text-3xl text-white text-center">Duolingo</h1>
        <Topics selectedTopic={topic} onSelectTopic={setTopic} />
        {topic && (
          <div className="">
            <button
              className="border w-50 py-4 bg-blue-600 rounded-md cursor-pointer hover:bg-blue-500"
              onClick={startListening}
            >
              <span className="text-white">🎙️ Empezar</span>
            </button>
            <p className="text-gray-400 text-sm">
              Detener cuando termines de hablar
            </p>
          </div>
        )}
        {loading && (
          <>
            {/* <VoiceVisualizer /> */}
            <button
              className="border w-50 py-4 bg-red-600 rounded-md cursor-pointer"
              onClick={stopListening}
            >
              <span className="text-white">🛑 Detener</span>
            </button>
          </>
        )}
        {text && (
          <p className="text-md text-blue-400">
            <strong>{text}</strong>
          </p>
        )}
        {textTraslated && (
          <p className="text-xl text-amber-300 ">
            <strong>{textTraslated}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
