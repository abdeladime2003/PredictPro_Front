import { useState } from 'react';
import {Link} from 'react-router-dom';
import { 
  User, 
  Mail, 
  Lock,
  Trophy,
  CheckCircle,
  Star,
  Shield,
  Medal,
  Crown
} from 'lucide-react';

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

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
                    <p>Pediction des resultats des match</p>
                  </div>
                  <div className="flex items-center gap-4 text-green-100">
                    <Medal className="w-6 h-6 text-blue-400" />
                    <p>Accès VIP aux prédictions</p>
                  </div>
                </div>

                {/* Testimonial */}
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
                <form className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                
                      <Trophy className="w-4 h-4 text-yellow-500" />
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
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
                        className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 pl-12"
                        placeholder="••••••••"
                      />
                      <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-3.5 group-hover:text-green-500 transition-colors" />
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setStep(2);
                    }}
                    className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:via-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-green-500/25"
                  >
                    Rejoindre l'élite
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <CheckCircle className="w-20 h-20 text-green-500 animate-pulse" />
                      <Trophy className="w-8 h-8 text-yellow-500 absolute -right-2 -top-2 animate-bounce" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Bienvenue dans l'Elite !
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Votre accès premium est maintenant activé.
                  </p>
                  <Link to ='/connexion' className="px-6 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                    Accéder à mon espace
                  </Link>
                </div>
              )}

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Déjà membre ?{' '}
                  <Link to="/connexion" className="text-green-600 hover:text-green-700 font-semibold">
                    Connexion
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Badges de sécurité */}
        <div className="mt-8 flex justify-center gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl px-4 py-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-white text-sm">Sécurité SSL</span>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl px-4 py-2 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-sm">Support Premium</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;