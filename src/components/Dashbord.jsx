import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, Award, Calendar, Users, Activity,
  ChevronRight, Star
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  //recuperer le nom de l'utilisateur connecté
  const name = localStorage.getItem('user');
  // Données de simulation pour le graphique
  const performanceData = [
    { name: 'Lun', success: 65, total: 85 },
    { name: 'Mar', success: 75, total: 90 },
    { name: 'Mer', success: 85, total: 95 },
    { name: 'Jeu', success: 70, total: 88 },
    { name: 'Ven', success: 90, total: 98 },
    { name: 'Sam', success: 95, total: 100 },
    { name: 'Dim', success: 88, total: 92 }
  ];

  // Données des matchs récents
  const recentMatches = [
    { id: 1, team1: 'PSG', team2: 'Real Madrid', prediction: 'PSG', result: 'PSG', correct: true },
    { id: 2, team1: 'Bayern', team2: 'Barcelona', prediction: 'Bayern', result: 'Bayern', correct: true },
    { id: 3, team1: 'Liverpool', team2: 'Man City', prediction: 'Liverpool', result: 'Man City', correct: false },
  ];
  const navigate = useNavigate();
  const handlesun = () => {
    navigate('/prediction');
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 text-transparent bg-clip-text">
              Tableau de bord
            </h1>
          
            <p className="text-gray-700 mt-2">Bienvenue {name}</p>

          </div>
          <button onClick={handlesun} className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Nouvelle Prédiction
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Taux de Réussite', value: '78%', icon: TrendingUp, color: 'from-green-500 to-green-600' },
            { title: 'Prédictions Totales', value: '145', icon: Activity, color: 'from-blue-500 to-blue-600' },
            { title: 'Meilleure Série', value: '12', icon: Award, color: 'from-yellow-500 to-yellow-600' },
            { title: 'Rang Global', value: '#42', icon: Users, color: 'from-purple-500 to-purple-600' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">{stat.title}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-200`}>
                    <stat.icon size={24} />
                  </div>
                </div>
              </div>
              <div className={`h-1 bg-gradient-to-r ${stat.color}`} />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Performance Graph */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Performance des Prédictions</h2>
              <div className="flex gap-2">
                {['week', 'month', 'year'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                      selectedPeriod === period
                        ? 'bg-green-600 text-white'
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
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="success" 
                    stroke="#16a34a" 
                    strokeWidth={2}
                    dot={{ stroke: '#16a34a', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Predictions */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Prédictions Récentes</h2>
            <div className="space-y-4">
              {recentMatches.map((match) => (
                <div key={match.id} className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-lg">{match.team1}</span>
                      <span className="text-gray-400">vs</span>
                      <span className="font-semibold text-lg">{match.team2}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Prédiction: <strong>{match.prediction}</strong>
                    </div>
                  </div>
                  <div className={`p-2 rounded-full ${match.correct ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {match.correct ? <Star size={20} /> : <Activity size={20} />}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 text-center text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center justify-center gap-2">
              Voir tout l'historique
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
