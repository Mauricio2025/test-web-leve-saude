// src/pages/Dashboard.tsx
import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import { format } from 'date-fns';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { HiLogout, HiSearch, HiSortAscending, HiSortDescending } from 'react-icons/hi';
import 'flowbite';

interface Feedback {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: any;
}

export default function Dashboard() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [busca, setBusca] = useState('');
  const [ordenarPor, setOrdenarPor] = useState<'createdAt' | 'rating'>('createdAt');
  const [ordem, setOrdem] = useState<'asc' | 'desc'>('desc');
  const navigate = useNavigate();

  useEffect(() => {
    const carregarFeedbacks = async () => {
      const q = query(collection(db, 'feedbacks'), orderBy(ordenarPor, ordem));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Feedback[];
      setFeedbacks(data);
    };
    carregarFeedbacks();
  }, [ordenarPor, ordem]);

  const filtrar = feedbacks.filter(f =>
    (f.userName || '').toLowerCase().includes(busca.toLowerCase()) ||
    (f.comment || '').toLowerCase().includes(busca.toLowerCase())
  );

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#FCF9EC] text-[#333333]">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10 border-b border-[#FB4C00]">
        <h1 className="text-2xl font-bold text-[#191970]">Painel de Feedbacks</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm font-medium text-[#FB4C00] hover:text-[#FC4C02]"
        >
          <HiLogout size={18} /> Sair
        </button>
      </header>

      {/* Filtros */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Buscar por nome ou comentário..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="block w-full p-2.5 ps-10 text-sm text-[#333333] border border-[#FB4C00] rounded-lg bg-[#FCF9EC] focus:ring-[#FB4C00] focus:border-[#FB4C00]"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <HiSearch className="text-[#FB4C00]" />
            </div>
          </div>

          <div className="flex gap-4">
            <select
              value={ordenarPor}
              onChange={(e) => setOrdenarPor(e.target.value as any)}
              className="bg-[#FCF9EC] border border-[#FB4C00] text-[#333333] text-sm rounded-lg p-2.5 focus:ring-[#FB4C00] focus:border-[#FB4C00]"
            >
              <option value="createdAt">Ordenar por data</option>
              <option value="rating">Ordenar por nota</option>
            </select>

            <button
              onClick={() => setOrdem(ordem === 'asc' ? 'desc' : 'asc')}
              className="bg-[#FB4C00] hover:bg-[#FC4C02] text-white rounded-lg px-3 py-2 text-sm flex items-center gap-1"
            >
              {ordem === 'asc' ? <HiSortAscending /> : <HiSortDescending />} {ordem === 'asc' ? 'Asc' : 'Desc'}
            </button>
          </div>
        </div>

        {/* Lista de feedbacks */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtrar.map(f => (
            <div key={f.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition border border-[#FB4C00]">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-[#191970]">{f.userName}</h3>
                <span className="text-yellow-500 font-bold">★ {f.rating}</span>
              </div>
              <p className="text-sm text-[#333333] mb-2">{f.comment}</p>
              <p className="text-xs text-gray-400">
                {f.createdAt?.toDate ? format(f.createdAt.toDate(), 'dd/MM/yyyy HH:mm') : 'Data inválida'}
              </p>
            </div>
          ))}
          {filtrar.length === 0 && (
            <p className="text-center text-[#333333] col-span-full mt-10">Nenhum feedback encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}
