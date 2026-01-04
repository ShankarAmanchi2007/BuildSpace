
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, User, LogOut } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Layout size={20} className="text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Build<span className="text-emerald-500">Space</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link to="/home" className="hover:text-emerald-500 transition-colors">Feed</Link>
          <Link to="/dashboard" className="hover:text-emerald-500 transition-colors">Dashboard</Link>
          <Link to="/profile/dev-1" className="hover:text-emerald-500 transition-colors">My Profile</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={handleLogout} className="flex items-center gap-2 !px-4">
            <LogOut size={18} />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
