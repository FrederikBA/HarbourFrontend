import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Admin from './components/Admin';
import OwnerList from './components/OwnerList';
import Harbours from './components/Harbours';
import HarbourContent from './components/HarbourContent';
import BoatOwners from './components/BoatOwners';
import CreateBoat from './components/CreateBoat';
import Connect from './components/Connect';
import NoMatch from './components/NoMatch';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRoles, setCurrentRoles] = useState([]);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} currentRoles={currentRoles} setCurrentRoles={setCurrentRoles} onLogout={() => { localStorage.clear(); setIsLoggedIn(false) }} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path='landing-page' element={<LandingPage currentRoles={currentRoles} setCurrentRoles={setCurrentRoles} />} />
        <Route path='ownerlist' element={<OwnerList currentRoles={currentRoles} />} />
        <Route path='harbours' element={<Harbours currentRoles={currentRoles} />} />
        <Route path='harbour/:id' element={<HarbourContent />} />
        <Route path='boat/:id' element={<BoatOwners />} />
        <Route path='admin' element={<Admin currentRoles={currentRoles} />} />
        <Route path='create-boat' element={<CreateBoat currentRoles={currentRoles} />} />
        <Route path='connect' element={<Connect currentRoles={currentRoles} />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div >
  );
}

export default App;
