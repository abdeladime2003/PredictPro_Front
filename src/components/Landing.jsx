import React, { useEffect } from 'react';
import { ArrowRight} from 'lucide-react';
import { FaDollarSign, FaImage, FaFutbol } from 'react-icons/fa'; // Importez les icônes depuis Font Awesome (ou une autre bibliothèque d'icônes).
import video from '../media/video.mp4';
import { Link } from 'react-router-dom';
import amine from '../media/amine.JPG';
import moad from '../media/moad.jpeg';
import abdo from '../media/abdo.jpg';
const Landing = () => {
  useEffect(() => {
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
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-50">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="relative group">
              <div className="text-3xl font-black bg-gradient-to-r from-yellow-500 via-yellow-600 to-green-600 text-transparent bg-clip-text transform transition-transform duration-300 group-hover:scale-105">
                Football IA Elite
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-green-600 transition-all duration-300 group-hover:w-full"></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="relative text-gray-700 hover:text-green-600 transition-colors duration-300 group">
                <span className="relative z-10">Fonctionnalités</span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a href="#testimonials" className="relative text-gray-700 hover:text-green-600 transition-colors duration-300 group">
                <span className="relative z-10">Témoignages</span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a href="#cta" className="relative overflow-hidden group bg-gradient-to-r from-yellow-600 to-green-600 text-white px-6 py-3 rounded-full transform hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative z-10">Commencer</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            <button className="md:hidden text-gray-700 hover:text-green-600 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          <div className="hidden md:hidden py-4 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-green-600 transition-colors duration-300">Fonctionnalités</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-green-600 transition-colors duration-300">Témoignages</a>
            <a href="#cta" className="block w-full text-center bg-gradient-to-r from-yellow-600 to-green-600 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">Commencer</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-yellow-600 via-green-600 to-yellow-600 bg-size-200 animate-gradient">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight">
            L'IA au service de vos 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">prédictions sportives</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-yellow-100 max-w-3xl mx-auto">
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
      <section id="features" className="py-20 px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-20 animate-on-scroll">
      Une suite complète d'outils
      <span className="block text-green-600">pour vos analyses sportives et créatives</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
      {
        title: 'Prédiction des Résultats',
        description: 'Anticipez les résultats des matchs grâce à notre intelligence artificielle, entraînée sur des millions de données sportives.',
        icon: <FaFutbol className="w-8 h-8 text-yellow-600" />,
        bgColor: 'bg-yellow-100',
      },
        {
          title: 'Prédiction des Prix des Transferts',
          description: "Évaluez les tendances du marché des transferts et obtenez des prédictions précises sur la valeur des joueurs.",
          icon: <FaDollarSign className="w-8 h-8 text-green-600" />,
          bgColor: 'bg-green-100',
        },
        {
          title: 'Génération d’Images par Prompts',
          description: "Créez des images uniques basées sur des prompts personnalisés, pour donner vie à votre créativité footballistique.",
          icon: <FaImage className="w-8 h-8 text-blue-600" />,
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
          <p className="text-lg mb-4">Regardez comment Football IA Elite peut transformer votre expérience sportive.</p>
          <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
            <video className="w-full h-auto" autoPlay loop muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
<section id="qui-nous" className="py-16 bg-gradient-to-r from-green-400 to-emerald-500 text-white">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-black mb-8">Qui sommes-nous ?</h2>
    <p className="text-lg mb-12">
      Nous sommes une équipe d'élèves ingénieurs passionnés par l'innovation et la technologie. Nous avons créé cette plateforme pour répondre à des besoins spécifiques dans le domaine du sport. Voici les membres de notre équipe :
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Abdeladime */}
      <div className="bg-white text-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:bg-green-100">
        <img src={abdo} alt="Abdeladime" className="w-32 h-32 rounded-full mx-auto mb-4 hover:scale-110 transition-all duration-300" />
        <h3 className="text-xl font-bold mb-2 text-gray-800">Abdeladime</h3>
        <p className="text-sm text-gray-600">
  Élève ingénieur en Data Engineering à l'INPT, passionné par la data et le développement web. Il a réfléchi à créer ce site web pour répondre aux besoins du football et illustrer ses compétences en développement et en machine learning à travers ce projet.
</p>

      </div>

      {/* Moaad */}
      <div className="bg-white text-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:bg-blue-100">
        <img src={moad} alt="Moaad" className="w-32 h-32 rounded-full mx-auto mb-4 hover:scale-110 transition-all duration-300" />
        <h3 className="text-xl font-bold mb-2 text-gray-800">Moaad</h3>
        <p className="text-sm text-gray-600">
  Moaad, élève ingénieur en Data Engineering à l'INPT, est à l'origine du modèle de génération d'images et a grandement contribué au développement du backend. Passionné par le développement web et mobile, il a également apporté son expertise dans la conception de l'interface utilisateur et l'expérience utilisateur (UI/UX).
</p>

      </div>

      {/* Amine */}
      <div className="bg-white text-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:bg-yellow-100">
        <img src={amine} className="w-32 h-32 rounded-full mx-auto mb-4 hover:scale-110 transition-all duration-300" />
        <h3 className="text-xl font-bold mb-2 text-gray-800">Amine</h3>
        <p className="text-sm text-gray-600">
  Amine, élève ingénieur en Data Engineering à l'INPT, a contribué au modèle de prédiction des résultats des matchs et au développement du frontend. Passionné par l'optimisation des performances, il a également apporté son expertise technique pour améliorer l'expérience utilisateur sur la plateforme.
</p>

      </div>
    </div>
  </div>
</section>

<section id="testimonials" className="py-20 px-4">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8 animate-on-scroll">Témoignages</h2>
    <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-6">
      {[
        {
          name: 'Yassine Elbadraoui',
          text: 'Grâce à PredictPro, j’ai pu prédire les résultats des matchs avec une grande précision, c’est devenu un outil indispensable pour mes analyses sportives.',
          position: 'Analyste sportif',
        },
        {
          name: 'Omar El Azhar',
          text: 'La plateforme m’a permis de comprendre les tendances des transferts et de prendre des décisions plus stratégiques pour mon équipe de fantasy football.',
          position: 'Passionné de football',
        },
        {
          name: 'Badr El Houari',
          text: 'Le modèle de génération d\'images a transformé l’expérience utilisateur. Il permet de créer des visuels uniques à partir de simples prompts, une véritable innovation pour les passionnés de football.',
          position: 'Passionné de football',
        },
      ].map((testimonial, index) => (
        <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
          <p className="text-lg italic mb-4">"{testimonial.text}"</p>
          <h3 className="font-bold">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.position}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="cta" className="py-20 px-4 bg-gradient-to-r from-yellow-600 via-green-600 to-yellow-600 bg-size-200 animate-gradient">
  <div className="max-w-4xl mx-auto text-center text-white">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">Prêt à révolutionner vos analyses sportives ?</h2>
    <p className="text-lg md:text-xl mb-6 md:mb-8">Rejoignez plus de 10 000 professionnels qui font déjà confiance à notre plateforme.</p>
    <div className="space-y-4">
      <Link to="/signature" className="inline-block bg-white text-yellow-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        Commencer l'essai gratuit
      </Link>
      <p className="text-sm text-yellow-200">30 jours d'essai gratuit • Aucune carte bancaire requise</p>
    </div>
  </div>
</section>
<footer className="bg-white text-gray-700 py-12 border-t border-gray-300">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text mb-4">
        PredictPro
      </h3>
      <p className="text-sm md:text-base mb-4">Votre partenaire pour des analyses sportives de haut niveau.</p>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-500 hover:text-yellow-400 transition duration-300">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-pink-500 transition duration-300">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-blue-400 transition duration-300">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-red-500 transition duration-300">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>
    </div>

    <div>
      <h4 className="font-bold text-lg md:text-xl mb-4">Liens rapides</h4>
      <ul className="text-sm md:text-base space-y-2">
        <li><a href="#features" className="hover:text-yellow-400 transition duration-300">Fonctionnalités</a></li>
        <li><a href="#testimonials" className="hover:text-yellow-400 transition duration-300">Témoignages</a></li>
        <li><a href="#cta" className="hover:text-yellow-400 transition duration-300">Commencer</a></li>
      </ul>
    </div>

    <div>
      <h4 className="font-bold text-lg md:text-xl mb-4">Contactez-nous</h4>
      <p className="text-sm md:text-base">Email: <a href="mailto:support@predictpro.com" className="hover:text-yellow-400 transition duration-300">Predictpro@gmail.com</a></p>
      <p className="text-sm md:text-base mt-2">Téléphone: <span className="hover:text-yellow-400">+212 700 20 27 17</span></p>
    </div>

    <div>
      <h4 className="font-bold text-lg md:text-xl mb-4">Inscription Newsletter</h4>
      <form className="flex">
        <input type="email" placeholder="Votre email" className="py-2 px-4 rounded-l-full border border-gray-300 focus:outline-none" />
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-6 rounded-r-full transition duration-300">S'abonner</button>
      </form>
    </div>
  </div>

  <div className="text-center mt-12">
    <p className="text-sm md:text-base">© 2024 PredictPro. Tous droits réservés.</p>
  </div>
</footer>



    </div>
  );
};

export default Landing;
