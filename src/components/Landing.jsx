import React, { useEffect } from 'react';
import { ArrowRight, LineChart, Users, BarChart } from 'lucide-react';
import video from '../media/video.mp4';
import { Link } from 'react-router-dom';
const Landing = () => {
  useEffect(() => {
    // Animation pour les éléments au scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header avec effet de verre */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-lg">
        <nav className="flex justify-between items-center max-w-7xl mx-auto p-6">
          <div className="text-3xl font-black bg-gradient-to-r from-yellow-600 to-green-600 text-transparent bg-clip-text">
          Football IA Elite
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
              Fonctionnalités
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
              Témoignages
            </a>
            <a href="#cta" className="bg-gradient-to-r from-yellow-600 to-green-600 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              Commencer
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section avec animation de gradient */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-yellow-600 via-green-600 to-yellow-600 bg-size-200 animate-gradient">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            L'IA au service de vos 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
              prédictions sportives
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-yellow-100 max-w-3xl mx-auto">
            Anticipez les résultats, analysez les tendances et prenez des décisions éclairées grâce à notre plateforme d'intelligence artificielle.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#cta" className="group bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
              Démarrer gratuitement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#features" className="text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Découvrir les fonctionnalités
            </a>
          </div>
        </div>
      </section>

      {/* Features avec cartes interactives */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20 animate-on-scroll">
            Une suite complète d'outils
            <span className="block text-green-600">pour vos analyses sportives</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                title: 'Prédiction IA',
                description: 'Notre algorithme analyse des millions de données pour prédire les résultats avec une précision inégalée.',
                icon: <LineChart className="w-8 h-8 text-yellow-600" />,
                bgColor: 'bg-yellow-100',
              },
              {
                title: 'Analyse des Fans',
                description: "Captez le pouls des supporters en temps réel grâce à notre analyse de sentiment sur les réseaux sociaux.",
                icon: <Users className="w-8 h-8 text-green-600" />,
                bgColor: 'bg-green-100',
              },
              {
                title: 'Dashboard Pro',
                description: 'Visualisez vos données dans des tableaux de bord personnalisables et intuitifs.',
                icon: <BarChart className="w-8 h-8 text-blue-600" />,
                bgColor: 'bg-blue-100',
              },
            ].map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                <div className={`${feature.bgColor} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-200">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Découvrez notre vidéo exclusive</h2>
    <p className="text-lg mb-4">Analyse des matchs de football et prédictions des résultats en direct.</p>
    <div className="w-full flex justify-center">
      <iframe
        className="w-full max-w-4xl h-64 md:h-96 rounded-lg shadow-lg"
        src={`${video}?autoplay=1&mute=1`} // Autoplay activé et vidéo mise en sourdine
        title="Vidéo de Football"
        allow="autoplay" // Autorisation d'autoplay
        allowFullScreen
        muted
      ></iframe>
    </div>
  </div>
</section>



      {/* Testimonials avec effet de carte moderne */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20 animate-on-scroll">
            Ce que disent nos utilisateurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[ 
              {
                quote: "La précision des prédictions est impressionnante. Cette plateforme est devenue indispensable pour notre équipe d'analystes.",
                name: "Jean Dupont",
                position: "Analyste Senior chez SportsPro",
                initials: "JD",
                gradient: "from-yellow-50 to-green-50",
              },
              {
                quote: "L'analyse des sentiments nous a permis de mieux comprendre nos fans et d'adapter notre stratégie en conséquence.",
                name: "Marie Laurent",
                position: "Directrice Marketing Sportif",
                initials: "ML",
                gradient: "from-green-50 to-yellow-50",
              },
            ].map((testimonial, index) => (
              <div key={index} className={`bg-gradient-to-br ${testimonial.gradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll`}>
                <p className="text-xl italic text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${testimonial.gradient.split(' ')[0]} rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className={`text-${testimonial.gradient.split(' ')[2]}`}>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA avec effet de profondeur */}
      <section id="cta" className="py-20 px-4 bg-gradient-to-r from-yellow-600 via-green-600 to-yellow-600 bg-size-200 animate-gradient">
  <div className="max-w-4xl mx-auto text-center text-white">
    <h2 className="text-4xl font-bold mb-8">Prêt à révolutionner vos analyses sportives ?</h2>
    <p className="text-xl mb-12">Rejoignez plus de 10 000 professionnels qui font déjà confiance à notre plateforme.</p>
    <div className="space-y-4">
      <Link to="/signature" className="inline-block bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        Commencer l'essai gratuit
      </Link>
      <p className="text-sm text-yellow-200">30 jours d'essai gratuit • Aucune carte bancaire requise</p>
    </div>
  </div>
</section>

      {/* Footer moderne */}
      <footer className="bg-white-900 text-white-400 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text mb-4">
              PredictPro
            </h3>
            <p>Votre partenaire pour des analyses sportives de haut niveau.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liens rapides</h4>
            <ul>
              <li><a href="#features" className="hover:text-white">Fonctionnalités</a></li>
              <li><a href="#testimonials" className="hover:text-white">Témoignages</a></li>
              <li><a href="#cta" className="hover:text-white">Commencer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Réseaux Sociaux</h4>
            <ul>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contactez-nous</h4>
            <p>Email: <a href="mailto:support@predictpro.com" className="hover:text-white">support@predictpro.com</a></p>
          </div>
        </div>
        <div className="text-center mt-12">
          <p>© 2024 PredictPro. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
