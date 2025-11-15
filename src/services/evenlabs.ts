const apiKey = import.meta.env.VITE_EVENLABS_API_KEY;

export const textToSpeech = (
  text: string,
  voice_id = "21m00Tcm4TlvDq8ikWAM"
) => {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`;
  const headers = {
    "xi-api-key": apiKey,
    "Content-Type": "application/json",
  };
  fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      text,
      voice_settings: { stability: 0.7, similarity_boost: 0.7 },
    }),
  }).then(async (res) => {
    const audioBlob = await res.blob();
    const audio = new Audio(URL.createObjectURL(audioBlob));
    audio.play();
  });
};
