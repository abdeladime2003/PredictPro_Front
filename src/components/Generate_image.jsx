import React, { useState, useEffect } from 'react';
//iùport aaxios
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, RefreshCw, Sparkles, 
  Star, Trophy
} from 'lucide-react';
import { IoFootballOutline } from "react-icons/io5";
// Effet de brillance
const Glow = ({ children }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-emerald-600 to-yellow-600 
                    rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
    </div>
    <div className="relative">
      {children}
    </div>
  </div>
);

const Card = ({ children, className }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`
      relative overflow-hidden
      bg-gradient-to-br from-emerald-400/20 via-green-500/20 to-teal-600/20 
      rounded-2xl shadow-2xl p-8 
      backdrop-blur-xl
      border border-white/20 
      ${className}
    `}
  >
    {/* Effet de lumière ambiante */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-yellow-500/10 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-emerald-500/10 blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2 animate-pulse"></div>
    </div>
    
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

const CardHeader = ({ children }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="mb-8"
  >
    <div className="relative">
      {/* Ligne décorative */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent bottom-0"></div>
      
      <div className="flex items-center gap-4 pb-4">
        <div className="relative">
          <IoFootballOutline size={40} className="text-white animate-spin-slow" />
          <motion.div 
            className="absolute inset-0 text-yellow-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Star size={40} className="opacity-50" />
          </motion.div>
        </div>
        <h1 className="font-bold text-4xl bg-clip-text text-transparent 
          bg-gradient-to-r from-white via-yellow-300 to-white">
          {children}
        </h1>
      </div>
    </div>
  </motion.div>
);

const FloatingIcon = ({ icon: Icon, delay }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 4, repeat: Infinity, delay }}
    className="absolute text-white/20"
  >
    <Icon size={24} />
  </motion.div>
);

const Input = ({ value, onChange, placeholder, className }) => (
  <Glow>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-6 py-4 rounded-xl
          bg-black/20 backdrop-blur-xl
          border border-white/20
          text-white placeholder-white/50
          focus:outline-none focus:ring-2 focus:ring-white/30
          transition-all duration-300
          ${className}
        `}
      />
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <IoFootballOutline size={20} />
      </motion.div>
    </motion.div>
  </Glow>
);

const Button = ({ onClick, variant, children, className, disabled }) => (
  <Glow>
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-xl px-8 py-4 font-bold
        flex items-center gap-3 justify-center
        transition-all duration-300 
        disabled:opacity-50
        relative overflow-hidden
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500' 
          : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-xl'}
        ${className}
      `}
    >
      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 w-1/2 h-full transform -skew-x-12 bg-white/10 translate-x-full hover:translate-x-[-200%] transition-transform duration-1000"></div>
      
      <div className="relative flex items-center gap-2">
        {children}
      </div>
    </motion.button>
  </Glow>
);

const LoadingSpinner = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col items-center gap-4 my-8"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="relative"
    >
      <IoFootballOutline size={40} className="text-white" />
      <div className="absolute inset-0 animate-ping">
        <IoFootballOutline size={40} className="text-white/30" />
      </div>
    </motion.div>
    <motion.p
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-white/70 font-medium"
    >
      Creating Football Magic...
    </motion.p>
  </motion.div>
);

const Alert = ({ variant, children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    className={`
      rounded-xl p-4 
      backdrop-blur-xl
      border
      flex items-center gap-3
      ${variant === 'error' 
        ? 'bg-red-500/20 text-red-200 border-red-500/30' 
        : 'bg-emerald-500/20 text-emerald-200 border-emerald-500/30'}
    `}
  >
    {variant === 'error' ? (
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        <Star className="w-5 h-5" />
      </motion.div>
    ) : (
      <Sparkles className="w-5 h-5" />
    )}
    {children}
  </motion.div>
);

const ImagePreview = ({ src }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="mt-8"
  >
    <Glow>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="rounded-xl overflow-hidden shadow-2xl"
      >
        <img 
          src={src}
          alt="Generated football scene"
          className="w-full"
        />
      </motion.div>
    </Glow>
  </motion.div>
);

function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt to generate an image.");
      return;
    }
  
    setLoading(true);
    setError(null);
    setImage(null);
  
    try {
      const response = await axios.post(
        "http://localhost:8000/generate-image/generate/", 
        { prompt },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Remplacez par votre token
          }
        }
      );
      console.log(response.data);
      setImage(`data:image/png;base64,${response.data.image}`);
    } catch (err) {
      setError("An error occurred while generating the image.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  

  const handleReset = () => {
    setPrompt("");
    setImage(null);
    setError(null);
  };

  // Background with CSS gradients and patterns
  const backgroundStyle = {
    background: `
      radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 30%),
      radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 30%),
      linear-gradient(180deg, rgb(6 78 59), rgb(1 14 3))
    `
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center" style={backgroundStyle}>
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[IoFootballOutline, Star, Trophy].map((Icon, index) => (
          Array.from({ length: 3 }).map((_, i) => (
            <FloatingIcon 
              key={`${index}-${i}`}
              icon={Icon} 
              delay={index * 0.5 + i}
            />
          ))
        ))}
      </div>
      
      {/* Main Content */}
      <Card className="w-full max-w-2xl mx-4">
        <CardHeader>Football Image Generator</CardHeader>
        
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your perfect football moment..."
          />
          
          <div className="flex gap-3">
            <Button 
              onClick={handleGenerateImage} 
              variant="primary"
              disabled={loading}
              className="flex-1"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Sparkles className="w-5 h-5" />
              )}
              {loading ? 'Creating Magic...' : 'Generate Image'}
            </Button>
            <Button 
              onClick={handleReset} 
              variant="secondary"
              disabled={loading}
            >
              <RefreshCw className="w-5 h-5" />
            </Button>
          </div>

          <AnimatePresence mode="wait">
            {error && <Alert variant="error">{error}</Alert>}
            {loading && <LoadingSpinner />}
            {image && <ImagePreview src={image} />}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="mt-8 text-center text-white/50 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2">
            <Trophy size={16} className="text-yellow-500" />
            <span>Powered by AI Football Magic</span>
            <Trophy size={16} className="text-yellow-500" />
          </div>
        </motion.div>
      </Card>
    </div>
  );
}

export default ImageGenerator;