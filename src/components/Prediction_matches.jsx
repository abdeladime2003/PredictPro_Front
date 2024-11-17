import React, { useState, useEffect } from 'react';
import { Trophy, Loader, AlertCircle, Shield, Star, Activity, Flame, Zap, Crown } from 'lucide-react';

const MatchPrediction = () => {
  const [formData, setFormData] = useState({ home_team: '', away_team: '' });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentPredictions, setRecentPredictions] = useState([]);
  const [animateScore, setAnimateScore] = useState(false);
  const [hoveredTeam, setHoveredTeam] = useState(null);

  const teams = 
    ['Almera', 'Sevilla', 'Real Sociedad', 'Las Palmas', 'Athletic Club',
      'Celta Vigo' ,'Villarreal' ,'Getafe', 'Cdiz', 'Atltico Madrid' ,'Mallorca'
      ,'Valencia', 'Osasuna' ,'Girona' ,'Barcelona' ,'Real Betis' ,'Alavs', 'Granada'
      ,'Rayo Vallecano' ,'Real Madrid' ,'Young Boys' ,'LOSC', 'Chelsea', 'Malm'
      ,'Dynamo Kyiv' ,'Beikta', 'Sheriff', 'Inter' ,'Club Brugge', 'Liverpool'
      ,'Man City' ,'Sporting', 'Shakhtar Donetsk' ,'Ajax', 'Milan' ,'Dortmund', 'PSG'
      ,'Porto' ,'RB Leipzig' ,'Atalanta' ,'Zenit', 'Wolfsburg' ,'Bayern'
      ,'RB Salzburg' ,'Juventus', 'Benfica', 'Man United' ,'Dinamo Zagreb' ,'Celtic'
      ,'Eintracht Frankfurt' ,'Napoli' ,'Tottenham' ,'Viktoria Plze', 'Marseille'
      ,'Leverkusen', 'Rangers' ,'Copenhagen', 'Maccabi Haifa' ,'Lazio' ,'Feyenoord'
      ,'Galatasaray' ,'Braga' ,'Arsenal' ,'Union Berlin', 'PSV' ,'Lens' ,'Antwerp'
      ,'Crvena zvezda', 'Newcastle' ,'Ipswich Town' ,'Everton' ,'Nottm Forest'
      ,'West Ham' ,'Brentford' ,'Leicester City', 'Brighton' ,'Crystal Palace'
      ,'Southampton' ,'Fulham' ,'Aston Villa', 'Bournemouth' ,'Wolves'
      ,'Sheffield United' ,'Burnley' ,'Luton Town'].sort();

  useEffect(() => {
    if (prediction) {
      setAnimateScore(true);
      const timer = setTimeout(() => setAnimateScore(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [prediction]);

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
      console.log(response);
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
    console.log(formData);
  };

  const TeamSelector = ({ type }) => (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
        <div className="absolute top-4 right-4">
          {type === 'home' ? (
            <Crown className="w-8 h-8 text-yellow-500 animate-pulse" />
          ) : (
            <Zap className="w-8 h-8 text-blue-500 animate-pulse" />
          )}
        </div>
        
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
          {type === 'home' ? 'Équipe Domicile' : 'Équipe Extérieure'}
        </h3>
        
        <select
          value={formData[type === 'home' ? 'home_team' : 'away_team']}
          onChange={(e) => {
            setFormData(prev => ({
              ...prev,
              [type === 'home' ? 'home_team' : 'away_team']: e.target.value
            }));
            setHoveredTeam(e.target.value);
          }}
          className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all outline-none appearance-none bg-white shadow-sm text-lg font-semibold"
        >
          <option value="">Sélectionner une équipe</option>
          {teams.map((team) => (
            <option key={`${type}-${team}`} value={team}>{team}</option>
          ))}
        </select>

        {formData[type === 'home' ? 'home_team' : 'away_team'] && (
          <div className="mt-6 flex items-center justify-center">
            <Shield 
              className={`w-16 h-16 ${
                type === 'home' ? 'text-blue-600' : 'text-red-600'
              } transform transition-all duration-500 hover:scale-110 hover:rotate-12`} 
            />
          </div>
        )}
      </div>
    </div>
  );

  const ConfidenceBar = ({ confidence }) => (
    <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${confidence}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
      </div>
    </div>
  );

  const PredictionResult = () => (
    <div className="relative transform transition-all duration-1000 animate-fadeIn">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-green-400/30 rounded-3xl blur-xl animate-pulse"></div>
      <div className="relative p-10 backdrop-blur-sm rounded-3xl shadow-2xl bg-white/90">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Trophy className="w-10 h-10 text-yellow-500 animate-bounce" />
          <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Résultat Prédit
          </h3>
          <Trophy className="w-10 h-10 text-yellow-500 animate-bounce" />
        </div>
        
        <div className="flex items-center justify-between gap-12 mb-10">
          <div className="flex-1 text-center transform hover:scale-105 transition-transform duration-500">
            <div className="relative inline-block group">
              <Shield className="w-24 h-24 mx-auto text-blue-600 transform group-hover:rotate-12 transition-transform duration-500" />
              <Star className="absolute top-0 right-0 w-8 h-8 text-yellow-500 animate-spin" />
            </div>
            <div className="mt-4 text-2xl font-bold bg-gradient-to-br from-blue-700 to-blue-500 bg-clip-text text-transparent">
              {prediction.home_team}
            </div>
          </div>
          
          <div className="flex items-center gap-8 bg-gradient-to-br from-blue-50 to-green-50 px-12 py-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500">
            <span className={`text-6xl font-bold bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent ${animateScore ? 'animate-bounce' : ''}`}>
              {prediction.home_goals}
            </span>
            <Activity className="w-12 h-12 text-gray-400" />
            <span className={`text-6xl font-bold bg-gradient-to-br from-green-600 to-green-800 bg-clip-text text-transparent ${animateScore ? 'animate-bounce' : ''}`}>
              {prediction.away_goals}
            </span>
          </div>
          
          <div className="flex-1 text-center transform hover:scale-105 transition-transform duration-500">
            <div className="relative inline-block group">
              <Shield className="w-24 h-24 mx-auto text-red-600 transform group-hover:rotate-12 transition-transform duration-500" />
              <Flame className="absolute top-0 left-0 w-8 h-8 text-orange-500 animate-pulse" />
            </div>
            <div className="mt-4 text-2xl font-bold bg-gradient-to-br from-red-700 to-red-500 bg-clip-text text-transparent">
              {prediction.away_team}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold text-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl">
              {prediction.result}
            </div>
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex justify-between items-center">
    
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header avec animation améliorée */}
        <div className="text-center relative py-12 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent)] animate-pulse"></div>
          </div>
          <div className="relative">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6 animate-fadeIn">
              Prédiction de Match
            </h1>
            <p className="text-2xl text-gray-600 animate-fadeIn delay-200">
              Découvrez le résultat de votre prochain match
            </p>
          </div>
        </div>

        {/* Formulaire principal avec effet de profondeur */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-green-400/20 blur-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 transform hover:scale-[1.01] transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <TeamSelector type="home" />
                <TeamSelector type="away" />
              </div>

              <button
                type="submit"
                disabled={loading || !formData.home_team || !formData.away_team}
                className="w-full relative overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 animate-gradient-x"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 animate-shimmer"></div>
                <div className="relative px-8 py-6 flex items-center justify-center gap-4 text-white font-bold text-xl">
                  {loading ? (
                    <>
                      <Loader className="animate-spin w-8 h-8" />
                      <span>Analyse en cours...</span>
                    </>
                  ) : (
                    <>
                      <Trophy className="w-8 h-8 transform group-hover:rotate-12 transition-transform duration-500" />
                      <span>Prédire le Match</span>
                      <Trophy className="w-8 h-8 transform group-hover:-rotate-12 transition-transform duration-500" />
                    </>
                  )}
                </div>
              </button>
            </form>

            {error && (
              <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl animate-shake">
                <div className="flex items-center gap-4 text-red-700">
                  <AlertCircle className="w-8 h-8 flex-shrink-0" />
                  <p className="font-semibold text-lg">{error}</p>
                </div>
              </div>
            )}

            {prediction && (
              <div className="mt-16">
                <PredictionResult />
              </div>
            )}
          </div>
        </div>

        {/* Prédictions récentes avec effet de carte */}
        {recentPredictions.length > 0 && (
          <div className="mt-20 animate-fadeIn">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Activity className="w-8 h-8 text-blue-500" />
              Prédictions Récentes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPredictions.map((pred, index) => (
                <div
                  key={pred.id}
                  style={{ animationDelay: `${index * 150}ms` }}
                  className="group relative transform transition-all duration-500 animate-fadeIn hover:z-10"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <Shield className="w-10 h-10 text-blue-500 transform group-hover:rotate-12 transition-transform duration-500" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                              {pred.home_team}
                            </div>
                            <div className="text-sm text-gray-500 font-medium px-2 py-0.5 rounded-full bg-gray-100 inline-block">
                              vs
                            </div>
                            <div className="font-bold text-lg bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                              {pred.away_team}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-green-600 bg-clip-text text-transparent">
                            {pred.home_goals} - {pred.away_goals}
                          </div>
                          <div className="mt-2">
                            <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-green-500 text-white transform group-hover:scale-105 transition-transform duration-500">
                              {pred.result}
                            </div>
                          </div>
                          {pred.confidence && (
                            <div className="mt-2 flex items-center justify-end gap-2">
                              <div className="h-2 w-20 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-green-500 to-blue-500 transform transition-all duration-1000 ease-out group-hover:animate-pulse"
                                  style={{ width: `${pred.confidence}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium text-gray-600">
                                {pred.confidence}%
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
  
        {/* Footer avec effet de gradient animé */}
        <footer className="mt-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 blur-2xl animate-pulse"></div>
          <div className="relative py-8">
            <p className="text-lg text-gray-600">
              Propulsé par{' '}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
               PredictPro
              </span>
            </p>
          </div>
        </footer>
  
        {/* Overlay d'ambiance */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent)] opacity-50"></div>
        </div>
      </div>
    );
  };
  
  export default MatchPrediction;