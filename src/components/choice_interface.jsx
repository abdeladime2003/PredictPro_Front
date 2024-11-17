import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PredictionChoice = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [activeBubbles, setActiveBubbles] = useState([]);
  const [hoverStates, setHoverStates] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBubbles(prev => {
        const newBubbles = [...prev];
        if (newBubbles.length < 20) {
          newBubbles.push({
            id: Date.now(),
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            size: Math.random() * 60 + 20,
            duration: Math.random() * 8 + 4
          });
        }
        return newBubbles.filter(bubble => 
          document.documentElement.contains(document.getElementById(`bubble-${bubble.id}`))
        );
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cards = [
    {
      id: 'player-prediction',
      title: "Prix de Transfert",
      subtitle: "Intelligence Prédictive",
      description: "Analysez et prédisez les valeurs de transfert des joueurs avec une précision exceptionnelle.",
      features: ["Analyse avancée", "IA prédictive", "Données en temps réel"],
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      glowColor: "rgba(56, 189, 248, 0.5)",
      particleColor: "#38BDF8",
      icon: (
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
      )
    },
    {
      id: 'prediction_matches',
      title: "Résultats Matchs",
      subtitle: "Prédictions Expertes",
      description: "Anticipez les résultats des matchs à venir grâce à notre modèle d'intelligence artificielle.",
      features: ["Statistiques avancées", "Analyses tactiques", "Tendances historiques"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      glowColor: "rgba(16, 185, 129, 0.5)",
      particleColor: "#10B981",
      icon: (
        <path d="M416 128c-.6 0-1.1 .2-1.6 .2c1.1-5.2 1.6-10.6 1.6-16.2c0-44.2-35.8-80-80-80c-24.6 0-46.3 11.3-61 28.8C256.4 24.8 219.3 0 176 0C114.1 0 64 50.1 64 112c0 7.3 .8 14.3 2.1 21.2C27.8 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96s-43-96-96-96z" />
      )
    },
    {
      id: 'generate_image',
      title: "Création Visuelle",
      subtitle: "IA Artistique",
      description: "Générez des visuels uniques du monde du football avec notre IA créative de pointe.",
      features: ["Styles personnalisés", "Haute résolution", "Génération instantanée"],
      gradient: "from-pink-500 via-rose-500 to-purple-500",
      glowColor: "rgba(236, 72, 153, 0.5)",
      particleColor: "#EC4899",
      icon: (
        <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h336c8.9 0 17.1-4.9 21.2-12.8s3.6-17.3-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z" />
      )
    }
  ];

  const FloatingBubbles = () => (
    <>
      {activeBubbles.map((bubble) => (
        <div
          key={bubble.id}
          id={`bubble-${bubble.id}`}
          className="absolute w-4 h-4 rounded-full opacity-0"
          style={{
            left: bubble.x,
            bottom: bubble.y,
            width: bubble.size,
            height: bubble.size,
            animation: `float ${bubble.duration}s linear forwards, fade ${bubble.duration}s ease-out forwards`
          }}
        >
          <div 
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(255,255,255,0) 70%)`
            }}
          />
        </div>
      ))}
    </>
  );

  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-32 h-32 border-8 border-gray-700 rounded-full animate-pulse">
          <div className="absolute inset-0 border-8 border-transparent border-t-blue-500 rounded-full animate-spin" />
          <div className="absolute inset-4 border-8 border-transparent border-t-green-500 rounded-full animate-spin-slow" />
          <div className="absolute inset-8 border-8 border-transparent border-t-purple-500 rounded-full animate-spin-slower" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold animate-pulse">Loading</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-${window.innerHeight + 200}px) rotate(360deg); opacity: 0; }
        }
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 0.5; }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        .animate-spin-slower {
          animation: spin 4s linear infinite;
        }
        .card-hover-effect {
          transition: all 0.3s ease;
        }
        .card-hover-effect:hover {
          transform: translateY(-10px) scale(1.02);
        }
      `}</style>

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Background Effects */}
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black"></div>
          <FloatingBubbles />
          
          <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          
          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="text-center mb-16 space-y-8">
              <h1 className="text-7xl md:text-8xl font-black">
                <span className="inline-block animate-float bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Football
                </span>
                <br />
                <span className="inline-block animate-float-delayed bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                  Intelligence
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Explorez l'avenir du football avec notre technologie d'intelligence artificielle de pointe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="group relative"
                  onMouseEnter={() => setHoverStates(prev => ({ ...prev, [card.id]: true }))}
                  onMouseLeave={() => setHoverStates(prev => ({ ...prev, [card.id]: false }))}
                >
                  <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${card.gradient} opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
                  
                  <button
                   onClick={() => navigate(`/${card.id}`)}

                    className="card-hover-effect relative flex flex-col h-full rounded-xl p-8 bg-gray-900 border border-gray-800 transition-all duration-300"
                  >
                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl"
                      style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${card.glowColor}, transparent 40%)`
                      }}
                    />

                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="relative w-20 h-20">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 animate-pulse rounded-full" />
                        <svg
                          viewBox="0 0 512 512"
                          className="w-full h-full text-white/90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                        >
                          {card.icon}
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-2 group-hover:text-white/90 transition-colors">
                      {card.subtitle}
                    </h3>
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {card.title}
                    </h2>
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                      {card.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mt-auto">
                      {card.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 group/feature">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.gradient} transform transition-all duration-300 group-hover/feature:scale-150`} />
                          <span className="text-sm text-gray-400 group-hover/feature:text-white transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Border Animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 transform scale-x-0 group-hover:scale-x-100 transition-all duration-700" />
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <footer className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <p className="text-sm text-gray-500 font-light tracking-wide">
                © 2024 Football Intelligence Lab™ • Propulsé par l'Intelligence Artificielle
              </p>
            </footer>
          </div>
        </>
      )}
    </div>
  );
};

export default PredictionChoice;