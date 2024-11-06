import React, { useState } from 'react';
import axios from 'axios';

const Card = ({ children, className }) => (
  <div className={`bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg p-6 ${className} transition-transform transform hover:scale-105`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="mb-4 border-b-2 border-white pb-2 font-bold text-2xl text-white animate-pulse">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="space-y-4">{children}</div>
);

const CardFooter = ({ children }) => (
  <div className="mt-4 text-sm text-gray-200">{children}</div>
);

const Button = ({ onClick, variant, children, className }) => (
  <button
    onClick={onClick}
    className={`rounded-full px-6 py-2 transition-transform transform hover:scale-110 shadow-lg ${variant === 'primary' ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'} ${className}`}
  >
    {children}
  </button>
);

const Input = ({ value, onChange, placeholder, className }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`border border-gray-300 rounded-full p-2 w-full shadow-md transition duration-300 focus:outline-none focus:ring focus:ring-blue-400 ${className}`}
  />
);

const Alert = ({ variant, children, className }) => (
  <div
    className={`rounded p-4 animate-bounce ${
      variant === 'error' ? 'bg-red-100 text-red-500 border border-red-300' : 'bg-green-100 text-green-500 border border-green-300'
    } ${className}`}
  >
    {children}
  </div>
);

function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt to generate an image.");
      return;
    }

    setLoading(true);
    setError(null);
    setImage(null);

    try {
      const response = await axios.post("http://localhost:8000/generate-image/generate/", { prompt });
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1506784983877-6821f0b38e2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Card className="max-w-md mx-auto z-10">
        <CardHeader>⚽ Football Image Generator</CardHeader>
        <CardContent>
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your football-themed prompt..."
            className="mb-4"
          />
          <div className="flex gap-2">
            <Button onClick={handleGenerateImage} variant="primary">
              Generate Image
            </Button>
            <Button onClick={handleReset} variant="secondary">
              Reset
            </Button>
          </div>
          {loading && <p className="mt-4 animate-bounce text-white">⚽ Generating your football magic...</p>}
          {error && <Alert variant="error" className="mt-4">{error}</Alert>}
          {image && (
            <img 
              src={image} 
              alt="Generated" 
              className="mt-4 max-w-full rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105 animate-fade-in"
            />
          )}
        </CardContent>
        <CardFooter>
          This app uses the <b>http://localhost:8000/generate-image/generate/</b> API to create images from your football prompts.
        </CardFooter>
      </Card>
    </div>
  );
}

export default ImageGenerator;
