import React, { useState, useEffect, useRef } from 'react';
import { Mail, Lock, Trophy, Star, Shield, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Correction de l'import redondant

// Animation des particules avec Three.js serait idéale ici mais nous allons simuler avec CSS
const ParticleField = () => {
  const particles = Array.from({ length: 50 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

// Logo 3D animé
const SoccerBallIcon3D = () => (
  <div className="relative w-24 h-24 perspective-1000">
    <div className="absolute inset-0 animate-rotate-y">
      <div className="relative w-full h-full transform-style-3d">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-2xl animate-pulse-3d">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-white">
            <circle cx="12" cy="12" r="10" className="animate-spin-slow" />
            <path d="M12 2L12 22M2 12H22M5 5L19 19M19 5L5 19" strokeLinecap="round" className="animate-pulse" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

// Badge animé avec effet de lévitation
const FloatingBadge = ({ icon: Icon, text, className }) => (
  <div className={`absolute flex items-center gap-2 bg-gradient-to-r from-green-500/90 to-emerald-600/90 
    backdrop-blur-md text-white p-3 rounded-2xl shadow-2xl animate-float ${className}`}>
    <Icon className="w-5 h-5" />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

// Effet de vague animée
const WaveEffect = () => (
  <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-green-500/20 to-transparent animate-wave" />
    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-emerald-500/20 to-transparent animate-wave-delayed" />
  </div>
);

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  // Effet de particules interactives au survol
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const cursor = document.createElement('div');
      cursor.className = 'particle-cursor';
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      document.body.appendChild(cursor);
      setTimeout(() => cursor.remove(), 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
        setIsLoading(true);
    setError('');
    try { 
      const response = await fetch('http://localhost:8000/login/', {
        method : 'POST',
        headers :{
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({email, password})
        
        }
      );
      if(!response.ok){
        throw new Error('Erreur lors de la connexion');
      }
      const data = await response.json();
      console.log('Utilisateur connecté avec succès:', data);
      setShowSuccess(true);
      setTimeout(() => navigate('/dashboard'), 1000);
      //setlocalstorage 
      localStorage.setItem('user', data.name);
      localStorage.setItem('token', data.access);
      localStorage.setItem('refresh' , data.refresh);

    }
    catch(err){
      console.log(err);
      setError('Échec de la connexion. Veuillez réessayer.');
    }
    finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10 animate-pan-pattern" />
      <ParticleField />
      
      {/* Orbes lumineux */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/30 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/30 rounded-full filter blur-3xl animate-pulse-slow-delayed" />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        {/* Badges flottants avec texte */}
        <FloatingBadge icon={Trophy} text="Premier League" className="-top-10 -left-10 rotate-12" />
        <FloatingBadge icon={Star} text="Champions" className="-top-10 -right-10 -rotate-12" />
        <FloatingBadge icon={Shield} text="Défense" className="-bottom-10 -left-10 -rotate-12" />
        <FloatingBadge icon={Award} text="Victoire" className="-bottom-10 -right-10 rotate-12" />

        {/* Container principal avec effet glassmorphism avancé */}
        <div className="w-full max-w-lg relative transform hover:scale-[1.01] transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-3xl" />
          
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            <WaveEffect />
            
            <div className="p-8 relative z-10">
              {/* En-tête avec effet 3D */}
              <div className="flex flex-col items-center mb-12">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-2xl opacity-50 animate-pulse-slow" />
                  <SoccerBallIcon3D />
                </div>
                
                <h2 className="text-5xl font-bold mt-6 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent
                  animate-gradient-x">
                  Football IA
                </h2>
                <p className="text-green-100/80 mt-4 text-xl text-center font-light">
                  L'avenir du football est ici
                </p>
              </div>

              {/* Formulaire avec effets avancés */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-lg 
                      transform group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <Mail className="h-5 w-5 text-green-300 group-focus-within:text-white transition-colors" />
                    </div>
                    <input
                      type="email"
                      placeholder="Votre email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 
                        focus:ring-green-500/50 focus:border-green-500 transition-all backdrop-blur-sm text-white 
                        placeholder-green-100/50"
                    />
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-lg 
                      transform group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <Lock className="h-5 w-5 text-green-300 group-focus-within:text-white transition-colors" />
                    </div>
                    <input
                      type="password"
                      placeholder="Votre mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 
                        focus:ring-green-500/50 focus:border-green-500 transition-all backdrop-blur-sm text-white 
                        placeholder-green-100/50"
                    />
                  </div>
                </div>

                {error && <div className="text-red-500 text-sm">{error}</div>}

                <div>
                  <button
                    type="submit"
                    className={`w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold 
                      rounded-xl shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 
                      focus:ring-green-500 hover:bg-gradient-to-l hover:scale-[1.02] transition-all duration-300 ${
                        isLoading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Connexion...' : 'Se Connecter'}
                  </button>
                </div>
              </form>

              {/* Confirmation de succès */}
              {showSuccess && (
                <div className="mt-4 text-green-300 text-center">
                  Connexion réussie !
                </div>
              )}

              <div className="mt-8 text-center text-green-100/80">
                Pas encore de compte?{' '}
                <Link to="/signature" className="text-green-400 hover:text-emerald-500 transition-all">
                  Inscrivez-vous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
