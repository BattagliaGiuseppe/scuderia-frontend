import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Vehicles from './pages/Vehicles';
import ComponentsPage from './pages/Components';
import Maintenances from './pages/Maintenances';
import ExpiringParts from './pages/ExpiringParts';
import Races from './pages/Races';
import Users from './pages/Users';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/maintenances" element={<Maintenances />} />
            <Route path="/expiring-parts" element={<ExpiringParts />} />
            <Route path="/races" element={<Races />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
