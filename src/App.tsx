import { useRef, useState } from "react";
import "./App.css";
import VoiceVisualizer from "./components/VoiceVisualizer";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const startListening = () => {
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

  const stopListening = () => {
    recognitionRef.current?.stop();
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🎤 Traducir voz a texto</h2>
      <button onClick={startListening}>🎙️ Empezar</button>
      {loading && (
        <>
          <VoiceVisualizer />
          <button onClick={stopListening}>🛑 Detener</button>
        </>
      )}

      <p style={{ marginTop: 20 }}>
        <strong>{text}</strong>
      </p>
    </div>
  );
}

export default App;
