import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const PredictionChoice = () => {
  const navigate = useNavigate();
  const [selectedPrediction, setSelectedPrediction] = useState(null);

  const handlePredictionChoice = (type) => {
    setSelectedPrediction(type);
    if (type === 'players') {
      navigate('/player-prediction');
    } else {
      navigate('/match-prediction');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-br from-green-300 to-blue-300 text-white"
    >
      <h1 className="text-7xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-400">
        Que souhaitez-vous prédire ?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {/* Prédiction des prix de transfert */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          className={`flex flex-col items-center p-10 rounded-3xl shadow-2xl cursor-pointer transition-all duration-500 ${
            selectedPrediction === 'players' ? 'bg-gradient-to-br from-blue-400 to-blue-500' : 'bg-gradient-to-br from-blue-500 to-blue-600'
          }`}
          onClick={() => handlePredictionChoice('players')}
        >
          <FaUserAlt className="text-9xl mb-6 transition-transform duration-300 transform hover:scale-110" />
          <h2 className="text-5xl font-bold mb-4">Prédiction des prix de transfert</h2>
          <p className="text-lg mt-4 text-center">
            Évaluez les prix de transfert des joueurs basés sur leurs compétences et performances.
          </p>
          <p className="mt-2 text-sm italic">Faites des choix éclairés pour vos équipes !</p>
        </motion.div>

        {/* Prédiction des résultats des matchs */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -3 }}
          whileTap={{ scale: 0.9 }}
          className={`flex flex-col items-center p-10 rounded-3xl shadow-2xl cursor-pointer transition-all duration-500 ${
            selectedPrediction === 'matches' ? 'bg-gradient-to-br from-green-400 to-green-500' : 'bg-gradient-to-br from-green-500 to-green-600'
          }`}
          onClick={() => handlePredictionChoice('matches')}
        >
          <FontAwesomeIcon icon={faFutbol} className="text-9xl mb-6 transition-transform duration-300 transform hover:scale-110" />
          <h2 className="text-5xl font-bold mb-4">Prédiction des matchs</h2>
          <p className="text-lg mt-4 text-center">
            Obtenez les prévisions sur les résultats des prochains matchs de votre championnat préféré.
          </p>
          <p className="mt-2 text-sm italic">Ne manquez pas les grands moments du football !</p>
        </motion.div>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <p className="text-sm">© 2024 Votre Application de Prédiction de Football. Tous droits réservés.</p>
      </footer>
    </motion.div>
  );
};

export default PredictionChoice;
