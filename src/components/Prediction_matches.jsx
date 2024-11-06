import React, { useState } from 'react';
import { Trophy, Loader, ArrowRight, AlertCircle } from 'lucide-react';
import { data } from 'autoprefixer';

const MatchPrediction = () => {
  const [formData, setFormData] = useState({ home_team: '', away_team: '' });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentPredictions, setRecentPredictions] = useState([]);

  const teams = [
    'Man Utd', 'Ipswich Town', 'Arsenal', 'Nottingham', 'Everton FC',
    'Newcastle United FC', 'West Ham United FC', 'Brentford',
    'Chelsea', 'Leicester City FC', 'Brighton & Hove Albion FC',
    'Manchester City FC', 'Tottenham Hotspur FC', 'Fulham FC',
    'Crystal Palace FC', 'Southampton', 'Aston Villa', 'Wolverhampton',
    'AFC Bournemouth', 'Liverpool FC'
  ].sort();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.home_team === formData.away_team) {
      setError("Les équipes ne peuvent pas être identiques");
      return;
    }
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8000/predict-match/predict/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la prédiction du match');
      }

      const data = await response.json();
      setPrediction(data);
      setRecentPredictions(prev => [
        { ...data, id: Date.now() },
        ...prev.slice(0, 4)
      ]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
    console.log(data);
  };

  const handleTeamChange = (teamType) => (event) => {
    setFormData(prev => ({ ...prev, [teamType]: event.target.value }));
    setError(null);
  };

  const getResultColor = (result) => {
    switch(result) {
      case 'Victoire Domicile':
        return 'text-green-600';
      case 'Victoire Extérieur':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-8 transition-transform hover:scale-105">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-800">Prédiction de Match</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="home-team" className="block text-sm font-medium text-gray-700">
                Équipe Domicile
              </label>
              <select
                id="home-team"
                value={formData.home_team}
                onChange={handleTeamChange('home_team')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Sélectionner une équipe</option>
                {teams.map((team) => (
                  <option key={`home-${team}`} value={team}>{team}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="away-team" className="block text-sm font-medium text-gray-700">
                Équipe Extérieur
              </label>
              <select
                id="away-team"
                value={formData.away_team}
                onChange={handleTeamChange('away_team')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Sélectionner une équipe</option>
                {teams.map((team) => (
                  <option key={`away-${team}`} value={team}>{team}</option>
                ))}
              </select>
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={loading || !formData.home_team || !formData.away_team}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg py-3 px-4 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <>
                <Loader className="animate-spin w-5 h-5" />
                Prédiction en cours...
              </>
            ) : (
              <>
                <Trophy className="w-5 h-5" />
                Prédire le résultat
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700" role="alert">
            <AlertCircle className="w-5 h-5" />
            {error}
          </div>
        )}

        {prediction && (
          <div className="mt-6 p-6 bg-white rounded-lg shadow-md transition-opacity duration-500 ease-in-out">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Résultat Prédit
            </h3>
            <div className="flex items-center justify-center gap-4 text-2xl font-bold">
              <span>{prediction.home_team}</span>
              <div className="flex items-center gap-2">
                <span className="text-3xl">{prediction.home_goals}</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="text-3xl">{prediction.away_goals}</span>
              </div>
              <span>{prediction.away_team}</span>
            </div>
            <div className={`text-center mt-4 font-semibold ${getResultColor(prediction.result)}`}>
              {prediction.result}
            </div>
          </div>
        )}

        {recentPredictions.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Prédictions récentes
            </h3>
            <div className="space-y-3">
              {recentPredictions.map((pred) => (
                <div
                  key={pred.id}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{pred.home_team}</span>
                    <span className="text-gray-500">vs</span>
                    <span className="font-medium">{pred.away_team}</span>
                  </div>
                  <div className={`font-medium ${getResultColor(pred.result)}`}>
                    {pred.home_goals} - {pred.away_goals}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchPrediction;
