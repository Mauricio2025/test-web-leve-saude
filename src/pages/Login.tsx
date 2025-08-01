// src/pages/Login.tsx
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import 'flowbite';
import logo from '../assets/logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      return setError('Email e senha são obrigatórios.');
    }
    try {
      setLoading(true);
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const snap = await getDoc(doc(db, 'users', cred.user.uid));
      if (!snap.exists()) {
        return setError('Perfil não encontrado.');
      }
      navigate('/dashboard');
    } catch (err: any) {
      setError('Falha ao entrar: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCF9EC] px-4">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-[#FB4C00]">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Leve Saúde" className="h-16 object-contain" />
        </div>

        <h2 className="text-xl font-semibold text-center mb-6 text-[#191970]">Área Administrativa</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#333333]">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#FCF9EC] border border-[#FB4C00] text-[#333333] text-sm rounded-lg focus:ring-[#FB4C00] focus:border-[#FB4C00] block w-full p-2.5"
            disabled={loading}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#333333]">
            Senha
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#FCF9EC] border border-[#FB4C00] text-[#333333] text-sm rounded-lg focus:ring-[#FB4C00] focus:border-[#FB4C00] block w-full p-2.5"
              disabled={loading}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2.5 text-[#FB4C00] hover:text-[#FC4C02]"
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${loading ? 'bg-[#7fb3d5]' : 'bg-[#FB4C00] hover:bg-[#FC4C02] focus:ring-4 focus:outline-none focus:ring-[#FB4C00]'}`}
          disabled={loading}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}
