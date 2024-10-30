import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from  './components/Signup';
import SignInComponent from './components/signin';
import Dashboard from './components/Dashbord';
import PredictionForm from './components/PredictionForm ';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signature" element={<SignupForm />} />
          <Route path="/" element={<Landing />} />
          <Route path="/connexion" element={<SignInComponent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/prediction" element={<PredictionForm />}
          />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
