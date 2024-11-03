import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from  './components/Signup';
import SignInComponent from './components/signin';
import Dashboard from './components/Dashbord';
import PredictionForm from './components/PredictionForm ';
import PredictionChoice from './components/choice_interface';
import MatchPredictor from "./components/Prediction_matches"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signature" element={<SignupForm />} />
          <Route path="/" element={<Landing />} />
          <Route path="/connexion" element={<SignInComponent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/player-prediction" element={<PredictionForm />}
          
          />
          <Route path="/choice_interface" element={<PredictionChoice />} />
          <Route path="/prediction_matches" element={<MatchPredictor />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
