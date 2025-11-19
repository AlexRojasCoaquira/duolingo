import { useRef, useState } from "react";

export const useRecognition = () => {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const finishCallbackRef = useRef<((text: string) => void) | null>(null);

  const [isListening, setIsListening] = useState(false);

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
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const result = event.results[event.results.length - 1];
      const transcript = result[0].transcript;

      if (result.isFinal && finishCallbackRef.current) {
        finishCallbackRef.current(transcript);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      finishCallbackRef.current = null;
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = (onFinish: (text: string) => void) => {
    finishCallbackRef.current = onFinish;
    recognitionRef.current?.stop();
  };

  return {
    startListening,
    stopListening,
    isListening, // ← AHORA SÍ LO TIENES
  };
};
