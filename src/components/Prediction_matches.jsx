import React, { useState } from 'react';
const MatchPredictor = () => {
    const [homeTeam, setHomeTeam] = useState('');
    const [awayTeam, setAwayTeam] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handlePredict = async () => {
        console.log('Prédire le résultat du match');
        setLoading(true);
        setError('');
        setPrediction(null);
        console.log(homeTeam, awayTeam);
    };

    return (
        <div className="match-predictor bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mt-10">
            <h2 className="text-xl font-bold text-center mb-4">Prédisez le résultat du match</h2>
            <input 
                type="text" 
                placeholder="Équipe à domicile" 
                value={homeTeam} 
                onChange={(e) => setHomeTeam(e.target.value)} 
                className="border border-gray-300 p-2 rounded mb-4 w-full"
            />
            <input 
                type="text" 
                placeholder="Équipe à l'extérieur" 
                value={awayTeam} 
                onChange={(e) => setAwayTeam(e.target.value)} 
                className="border border-gray-300 p-2 rounded mb-4 w-full"
            />
            <button 
                onClick={handlePredict} 
                className="bg-blue-500 text-white font-semibold py-2 rounded w-full hover:bg-blue-600 transition duration-200"
            >
                {loading ? 'Chargement...' : 'Prédire'}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {prediction && (
                <div className="prediction-result bg-gray-100 p-4 rounded mt-4 transition-all duration-300">
                    <h3 className="font-bold">Résultat Prédictif :</h3>
                    <p className="text-lg">
                        {homeTeam} {prediction.home_goals} - {prediction.away_goals} {awayTeam}
                    </p>
                    <p className="font-semibold">Probabilités de victoire :</p>
                    <p>Victoire à domicile: {Math.round(prediction.home_win_probability * 100)}%</p>
                    <p>Match nul: {Math.round(prediction.draw_probability * 100)}%</p>
                    <p>Victoire à l'extérieur: {Math.round(prediction.away_win_probability * 100)}%</p>
                </div>
            )}
        </div>
    );
};

export default MatchPredictor;
