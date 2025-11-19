import { useEffect, useState } from "react";

export const Ticker = () => {
  const items = [
    "🇬🇧 Aprender inglés abre puertas en todo el mundo",
    "🗣️ Con inglés puedes conocer gente de cualquier país",
    "🌎 Hablar inglés te permite viajar con más confianza",
    "📚 Cada nueva palabra en inglés es un paso hacia tu futuro",
    "🐶 Los animales nos enseñan lealtad sin decir una palabra",
    "🐱 Los gatos entienden más de lo que crees",
    "✈️ Viajar te recuerda que siempre hay algo nuevo por aprender",
    "🍜 Probar comida nueva es otra forma de viajar",
    "🦁 El león no es el rey por fuerza, sino por actitud",
    "🍕 La comida une culturas que el idioma separa",
    "🐢 La naturaleza nos enseña a avanzar a nuestro propio ritmo",
    "🇬🇧 Saber inglés aumenta tus oportunidades de trabajo",
    "🗺️ Cada viaje comienza con una decisión valiente",
    "🍓 La comida fresca siempre cuenta una historia",
    "🦜 Algunos animales pueden aprender palabras… ¿y tú no vas a aprender inglés?",
    "🏨 En cualquier país, el inglés siempre te saca de apuros",
    "🐳 Los animales del océano nos recuerdan lo pequeño que somos",
    "✈️ Viajar es invertir en recuerdos, no en cosas",
    "🍣 Probar comida de otros países te conecta con su cultura",
    "🇬🇧 El inglés no solo es un idioma, es una herramienta de libertad",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000); // 3 segundos por ítem

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  overflow-hidden text-white">
      <div className="flex items-center justify-between text-lg transition-opacity duration-1000 opacity-100">
        <p className="p-3 bg-gray-800/70 backdrop-blur-md border border-gray-700/40 rounded-xl text-sm text-white shadow-lg animate-fade-slide">
          {items[index]}
        </p>
        <img
          src="https://www.pngplay.com/wp-content/uploads/6/Dua-Lipa-Transparent-Background.png"
          alt=""
          className="h-60"
        />
      </div>
    </div>
  );
};
