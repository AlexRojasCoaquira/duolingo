import { useEffect, useRef, useState } from "react";
import "./App.css";
// import VoiceVisualizer from "./components/VoiceVisualizer";
import { translateWithOpenAI } from "./services/traslate";

function App() {
  const [text, setText] = useState("");
  const [textTraslated, setTextTraslated] = useState("");
  const [loading, setLoading] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

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
      const response = await translateWithOpenAI(text);
      console.log("response", response);
      setTextTraslated(response?.choices[0].message.content || "");
      setLoading(false);
    };
    traslate();
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <h2>🎤 Traducir voz a texto</h2>
      <button onClick={startListening}>🎙️ Empezar</button>
      {loading && (
        <>
          {/* <VoiceVisualizer /> */}
          <button onClick={stopListening}>🛑 Detener</button>
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
  );
}

export default App;
