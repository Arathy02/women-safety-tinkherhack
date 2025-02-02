import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from './Components/Login';
import Landing from './Components/Landing';
import LiveGuardian from './Components/Liveguardian';
import SafeRoute from './Components/Saferoute';
import AlertSiren from './Components/Alertsiren';
import PrecautionChecklist from './Components/precuationchecklist';
import Home from './Components/Home';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/safe-route" element={<SafeRoute />} />
            <Route path="/guardian" element={<LiveGuardian />} />
            <Route path="/checklist" element={<PrecautionChecklist />} />
            <Route path="/siren" element={<AlertSiren />} />
          </Routes>
     
      </BrowserRouter>

    </div>
  );
}

export default App;
