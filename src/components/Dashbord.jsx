import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, Activity, Trophy, Goal,
  ChevronRight, Star
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [totalValue1, setTotalValue1] = useState(0);
  const [totalValue2, setTotalValue2] = useState(0);
  const [totalValue3, setTotalValue3] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const name = localStorage.getItem('user');
  const [recentMatches, setRecentMatches] = useState([]);
  
  const performanceData = [
    { name: 'Lun', success: 65, total: 85 },
    { name: 'Mar', success: 75, total: 90 },
    { name: 'Mer', success: 85, total: 95 },
    { name: 'Jeu', success: 70, total: 88 },
    { name: 'Ven', success: 90, total: 98 },
    { name: 'Sam', success: 95, total: 100 },
    { name: 'Dim', success: 88, total: 92 }
  ];

  const navigate = useNavigate();

  const handleSun = () => {
    navigate('/choice_interface');
  };

  async function fetchPredictions1() {
    try {
      const response = await fetch('http://127.0.0.1:8000/predict-match/predictions/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      if (!response.ok) throw new Error('Erreur lors de la prédiction');
      const data = await response.json();
      setTotalValue1(Array.isArray(data) ? data.length : 0);
    } catch (error) {
      console.error('Erreur :', error.message);
      setTotalValue1(0);
    }
  }

  async function fetchPredictions2() {
    try {
      const response = await fetch('http://127.0.0.1:8000/transfer-predictions/predict-price/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      if (!response.ok) throw new Error('Erreur lors de la prédiction');
      const data = await response.json();
      setTotalValue2(Array.isArray(data) ? data.length : 0);
    } catch (error) {
      console.error('Erreur :', error.message);
      setTotalValue2(0);
    }
  }

  async function fetchPredictions3() {
    try {
      const response = await fetch('http://127.0.0.1:8000/generate-image/generate/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      if (!response.ok) throw new Error('Erreur lors de la prédiction');
      const data = await response.json();
      setTotalValue3(Array.isArray(data) ? data.length : 0);
    } catch (error) {
      console.error('Erreur :', error.message);
      setTotalValue3(0);
    }
  }
  
  async function fetchRecentMatches() {
    try {
      const response = await fetch('http://127.0.0.1:8000/predict-match/predictions/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) throw new Error('Erreur lors de la récupération des matchs récents');
      const data = await response.json();
      setRecentMatches(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Erreur :', error.message);
      setRecentMatches([]);
    }
  }

  useEffect(() => {
    fetchPredictions1();
    fetchPredictions2();
    fetchPredictions3();
    fetchRecentMatches();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-yellow-400 to-green-800 p-8">
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="backdrop-blur-md bg-white bg-opacity-20 border border-gray-100 rounded-xl p-12 shadow-lg">
          <div className="max-w-7xl mx-auto backdrop-blur-sm bg-white/30 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-8">
              <div className="relative">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                  Football Analytics Dashboard
                </h1>
                <p className="text-white mt-2 text-xl">
                  Bienvenue, 
                  <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text ml-2">
                    {name}
                  </span>
                </p>
              </div>
              <button 
                onClick={handleSun}
                className="relative overflow-hidden bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Nouvelle Prédiction
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { 
                  title: 'Taux de Réussite', 
                  value: '91%', 
                  icon: Trophy, 
                  color: 'from-green-500 to-green-600',
                  description: 'Précision des prédictions'
                },
                { 
                  title: 'Prédictions Matches', 
                  value: totalValue1, 
                  icon: Activity,
                  color: 'from-blue-500 to-blue-600',
                  description: 'Analyses complètes'
                },
                { 
                  title: 'Prédictions Joueurs', 
                  value: totalValue2, 
                  icon: Goal, 
                  color: 'from-yellow-500 to-yellow-600',
                  description: 'Performances analysées'
                },
                { 
                  title: 'Images Générées', 
                  value: totalValue3, 
                  icon: Star, 
                  color: 'from-purple-500 to-purple-600',
                  description: 'Visualisations créées'
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative bg-white/80 backdrop-blur-md rounded-xl shadow-lg transition-all duration-300 overflow-hidden group"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm font-semibold">{stat.title}</p>
                        <p className="text-3xl font-bold mt-1 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {stat.description}
                        </p>
                      </div>
                      <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-xl text-white transform transition-all duration-300 ${isHovered === index ? 'scale-110 rotate-12' : ''}`}>
                        {stat.icon && <stat.icon size={24} />}
                      </div>
                    </div>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${stat.color} transform origin-left transition-transform duration-300 ${isHovered === index ? 'scale-x-100' : 'scale-x-0'}`} />
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Performance Graph */}
              <div className="lg:col-span-2 bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                    Performance des Prédictions
                  </h2>
                  <div className="flex gap-2">
                    {['week', 'month', 'year'].map((period) => (
                      <button
                        key={period}
                        onClick={() => setSelectedPeriod(period)}
                        className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 ${
                          selectedPeriod === period
                            ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-md'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {period.charAt(0).toUpperCase() + period.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          borderRadius: '8px',
                          border: 'none',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="success" 
                        stroke="url(#colorGradient)" 
                        strokeWidth={3}
                        dot={{ stroke: '#16a34a', strokeWidth: 2, r: 4, fill: '#fff' }}
                        activeDot={{ r: 8, stroke: '#16a34a', strokeWidth: 2, fill: '#fff' }}
                      />
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#16a34a" />
                          <stop offset="100%" stopColor="#eab308" />
                        </linearGradient>
                      </defs>
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
{/* Recent Predictions - Only 3 most recent */}
<div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
  <h2 className="text-xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent mb-6">
    Dernières Prédictions
  </h2>
  <div className="space-y-4">
    {recentMatches
      .slice(0, 3) // Prend seulement les 3 premiers éléments
      .map((match, index) => (
        <div 
          key={match.id || index}
          className="group relative bg-white/50 rounded-lg p-4 transition-all duration-300 hover:bg-white/80 hover:shadow-md cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {match.home_team} vs {match.away_team}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-600">Résultat : </span>
                <span className="font-bold text-gray-800">
                  {match.home_goals} - {match.away_goals}
                </span>
              </div>
              {/* Ajout de la date */}
              <div className="text-sm text-gray-500 mt-1">
                {new Date(match.created_at).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'short'
                })}
              </div>
            </div>
            <ChevronRight className="text-gray-400 transform transition-transform duration-300 group-hover:translate-x-1" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </div>
    ))}
    {/* Bouton "Voir plus" */}
    {recentMatches.length > 3 && (
      <button 
        onClick={() => navigate('/predictions')}
        className="w-full mt-4 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 group"
      >
        Voir toutes les prédictions
        <ChevronRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    )}
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;