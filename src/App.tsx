import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './services/firebase';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-500 text-xl">Carregando...</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" replace /> : <Login />}
        />

        {/* Dashboard protegida */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/" replace />}
        />

        {/* Qualquer rota inválida */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
