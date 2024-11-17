import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/Signup';
import SignInComponent from './components/signin';
import Dashboard from './components/Dashbord';
import PredictionForm from './components/PredictionForm ';
import PredictionChoice from './components/choice_interface';
import MatchPrediction from "./components/Prediction_matches";
import ImageGenerator from './components/Generate_image';
import PrivateRoute from './components/PrivateRoute'; // Importer le composant PrivateRoute

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<Landing />} />
          <Route path="/signature" element={<SignupForm />} />
          <Route path="/connexion" element={<SignInComponent />} />
          
          {/* Routes privées */}
          <Route
            path="/dashboard"
            element={<PrivateRoute element={Dashboard} />}
          />
          <Route
            path="/player-prediction"
            element={<PrivateRoute element={PredictionForm} />}
          />
          <Route
            path="/choice_interface"
            element={<PrivateRoute element={PredictionChoice} />}
          />
          <Route
            path="/prediction_matches"
            element={<PrivateRoute element={MatchPrediction} />}
          />
          <Route
            path="/generate_image"
            element={<PrivateRoute element={ImageGenerator} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
