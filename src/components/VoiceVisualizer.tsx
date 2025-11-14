import { useState, useRef, useEffect } from "react";

export default function VoiceVisualizer() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const volumeRef = useRef(0); // volumen en tiempo real sin provocar renders

  const [volume, setVolume] = useState(0); // renderiza poco

  const startVisualizer = async () => {
    const audioCtx = new AudioContext();
    audioContextRef.current = audioCtx;

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const source = audioCtx.createMediaStreamSource(stream);

    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;

    analyserRef.current = analyser;
    dataArrayRef.current = new Uint8Array(analyser.fftSize);

    source.connect(analyser);

    let smooth = 0;
    let lastUpdate = 0;

    const tick = (time: number) => {
      if (!analyserRef.current || !dataArrayRef.current) return;

      const data = dataArrayRef.current;
      analyserRef.current.getByteTimeDomainData(
        data as Uint8Array<ArrayBuffer>
      );

      // calcular amplitud
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        sum += Math.abs(data[i] - 128);
      }

      const amplitude = Math.min((sum / data.length) * 3, 100);

      smooth = smooth * 0.7 + amplitude * 0.3;
      volumeRef.current = smooth; // NO provoca render

      // 🔥 Solo actualizamos React cada 100ms
      if (time - lastUpdate > 100) {
        setVolume(volumeRef.current);
        lastUpdate = time;
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  useEffect(() => {
    startVisualizer();
  }, []);

  return (
    <div className="p-5">
      {/* <button
        onClick={}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        🎙️ Iniciar
      </button> */}

      <div className="mt-5 h-5 w-[300px] bg-gray-200 rounded-lg overflow-hidden">
        <div
          className="h-full bg-green-500 transition-[width] duration-100 linear"
          style={{ width: `${volume}%` }}
        />
      </div>

      {/* <p className="mt-2 font-semibold">Volumen: {Math.round(volume)}</p> */}
    </div>
  );
}
