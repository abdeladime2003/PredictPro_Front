import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PredictionForm = () => {
    const [formData, setFormData] = useState({
        age: '',
        ATT: '',
        SKI: '',
        MOV: '',
        POW: '',
        MEN: '',
        DEF: '',
        GK: '',
        fee: '',
        loan: ''
    });
    const [predictedPrice, setPredictedPrice] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeField, setActiveField] = useState(null);

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setPredictedPrice(null);
        setLoading(true);

        if (Object.values(formData).some(value => value === '')) {
            setError('Veuillez remplir tous les champs.');
            setLoading(false);
            return;
        }

        const features = Object.keys(formData).reduce((acc, key) => ({
            ...acc,
            [key]: Number(formData[key])
        }), {});

        try {
            const response = await fetch('http://localhost:8000/transfer-predictions/predict-price/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ features })
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Erreur lors de la prédiction');
            }

            setPredictedPrice(data.predicted_price + 50);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const formFields = [
        { name: 'age', label: 'Âge', icon: '👤', description: 'L\'âge du joueur.' },
        { name: 'ATT', label: 'Attaque', icon: '⚔️', description: 'La capacité d\'attaque du joueur.' },
        { name: 'SKI', label: 'Technique', icon: '🎯', description: 'Les compétences techniques du joueur.' },
        { name: 'MOV', label: 'Mouvement', icon: '🏃', description: 'La mobilité et agilité du joueur.' },
        { name: 'POW', label: 'Puissance', icon: '💪', description: 'La force physique du joueur.' },
        { name: 'MEN', label: 'Mental', icon: '🧠', description: 'La résistance mentale et la prise de décision.' },
        { name: 'DEF', label: 'Défense', icon: '🛡️', description: 'Les compétences défensives du joueur.' },
        { name: 'GK', label: 'Gardien', icon: '🧤', description: 'Les capacités du gardien.' },
        { name: 'fee', label: 'Frais', icon: '💰', description: 'Le montant des frais de transfert estimés.' },
        { name: 'loan', label: 'Prêt', icon: '📋', description: 'Le nombre de prêts effectués par le joueur.' }
    ];

    const getInputColor = (value) => {
        if (value === '') return 'border-gray-300';
        const num = Number(value);
        if (isNaN(num)) return 'border-red-500';
        return 'border-green-500';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">
                    Prédiction de Prix du Joueur
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {formFields.map(({ name, label, icon, description }) => (
                            <motion.div
                                key={name}
                                whileHover={{ scale: 1.02 }}
                                className="relative"
                            >
                                <div className="flex items-center space-x-2 mb-1">
                                    <span className="text-xl">{icon}</span>
                                    <label className="text-sm font-medium text-gray-700">
                                        {label}
                                    </label>
                                </div>
                                <input
                                    type="number"
                                    value={formData[name]}
                                    onChange={(e) => handleChange(name, e.target.value)}
                                    onFocus={() => setActiveField(name)}
                                    onBlur={() => setActiveField(null)}
                                    className={`w-full px-4 py-2 rounded-lg border-2 transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                                        activeField === name
                                            ? 'border-indigo-500 shadow-lg'
                                            : getInputColor(formData[name])
                                    }`}
                                    placeholder={`Entrez ${label.toLowerCase()}`}
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    {description}
                                </p>
                                {activeField === name && (
                                    <p className="text-sm text-gray-500 mt-1">
                                        {formData[name] === '' ? 'Ce champ est requis.' : 'Valeur valide.'}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 px-6 rounded-xl text-white font-semibold text-lg transition-colors ${
                            loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-indigo-600 hover:bg-indigo-700'
                        }`}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                                </svg>
                                <span>Calcul en cours...</span>
                            </div>
                        ) : (
                            'Prédire le Prix'
                        )}
                    </motion.button>
                </form>
                {predictedPrice !== null && (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200"
    >
        <h3 className="text-2xl font-bold text-green-800 text-center">
            {/** Afficher le prix prédit avec round*/}
            Prix prédit : {Math.round(predictedPrice)} millions €
        </h3>
    </motion.div>
)}


                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 p-6 bg-red-50 rounded-xl border border-red-200"
                    >
                        <h3 className="text-xl font-semibold text-red-800 text-center">
                            {error}
                        </h3>
                    </motion.div>
                )}

                {/* Section de téléchargement du PDF */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 text-center"
                >
                    <a
                        href="/politique.pdf"
                        download
                        className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
                    >
                        Télécharger la Politique de Prédiction
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default PredictionForm;
