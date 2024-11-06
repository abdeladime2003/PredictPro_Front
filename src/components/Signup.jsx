import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Trophy, CheckCircle, Star, Shield, Medal, Crown } from 'lucide-react';

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création du compte');
      }

      const data = await response.json();
      console.log('Utilisateur créé avec succès:', data);
      setStep(2);
    } catch (err) {
      console.error(err);
      setError('Échec de la création du compte. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-blue-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Motifs d'arrière-plan animés */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Conteneur principal avec effet de verre */}
      <div className="w-full max-w-4xl relative">
        {/* En-tête Premium */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black px-8 py-2 rounded-full shadow-xl flex items-center gap-2 animate-bounce">
          <Crown className="w-5 h-5" />
          <span className="font-bold uppercase tracking-wider text-sm">Premium Access</span>
        </div>

        <div className="backdrop-blur-lg bg-white bg-opacity-10 rounded-3xl shadow-2xl overflow-hidden border border-white border-opacity-20">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Section gauche - Présentation */}
            <div className="bg-gradient-to-br from-green-800 to-green-900 p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Trophy className="w-10 h-10 text-yellow-400" />
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                    Football IA Elite
                  </h1>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-green-100">
                    <Shield className="w-6 h-6 text-green-400" />
                    <p>Analyse tactique avancée</p>
                  </div>
                  <div className="flex items-center gap-4 text-green-100">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <p>Prédiction des résultats des matchs</p>
                  </div>
                  <div className="flex items-center gap-4 text-green-100">
                    <Medal className="w-6 h-6 text-blue-400" />
                    <p>Accès VIP aux prédictions</p>
                  </div>
                </div>

                {/* Témoignage */}
                <div className="mt-12 bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-green-100 italic">"Une révolution dans l'analyse du football"</p>
                  <p className="text-sm text-green-300 mt-2">- Pro League Manager</p>
                </div>
              </div>

              {/* Motif décoratif */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-repeat opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`
                }} />
              </div>
            </div>

            {/* Section droite - Formulaire */}
            <div className="p-8 bg-white">
              {step === 1 ? (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      Nom d'utilisateur
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 pl-12"
                        placeholder="votre nom d'utilisateur"
                      />
                      <User className="w-5 h-5 text-gray-400 absolute left-4 top-3.5 group-hover:text-green-500 transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-700">Email</label>
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 pl-12"
                        placeholder="votremail@exemple.com"
                      />
                      <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-3.5 group-hover:text-green-500 transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-700">Mot de passe</label>
                    <div className="relative group">
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 pl-12"
                        placeholder="••••••••"
                      />
                      <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-3.5 group-hover:text-green-500 transition-colors" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition duration-200"
                  >
                    {loading ? 'Chargement...' : 'S’inscrire'}
                  </button>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      Vous avez déjà un compte? <Link to="/login" className="text-green-600">Connectez-vous</Link>
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-green-700">Inscription réussie!</h2>
                  <p className="text-gray-600">Vous pouvez maintenant vous connecter et profiter de nos services.</p>
                </div>
              )}

              {/* Connexion avec Google */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
