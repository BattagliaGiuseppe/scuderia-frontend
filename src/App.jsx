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
import PrivateRoute from './components/PrivateRoute'; // Import del componente

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar laterale */}
        <Sidebar />

        {/* Contenuto principale */}
        <div className="flex-1 flex flex-col">
          {/* Navbar in alto */}
          <Navbar />

          {/* Area principale delle pagine */}
          <div className="flex-1 p-6 bg-gray-100">
            <Routes>
              {/* Route pubblica */}
              <Route path="/login" element={<Login />} />

              {/* Route protette */}
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/components" element={<ComponentsPage />} />
                <Route path="/maintenances" element={<Maintenances />} />
                <Route path="/expiring-parts" element={<ExpiringParts />} />
                <Route p
