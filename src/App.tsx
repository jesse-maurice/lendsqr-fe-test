import {
  Route,
  Routes,
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import User from './pages/User';
import UserDetails from './pages/UserDetails';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/User" element={<User />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/UserDetails" element={<UserDetails />} />
    </Routes>
  )
}

export default App
