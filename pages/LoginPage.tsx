
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Mail, Lock } from 'lucide-react';
import { Button } from '../components/Button';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Fake Auth Logic
    const user = { id: 'user-1', name: 'Demo User', email, isDeveloper: true };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-6 rotate-3">
            <Layout size={32} className="text-black" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome to BuildSpace</h1>
          <p className="text-zinc-400">Sign in to showcase your creative masterpieces.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest px-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest px-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-700"
                />
              </div>
            </div>

            <Button type="submit" fullWidth className="py-4 text-lg font-bold">
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-zinc-500">
            Don't have an account? <span className="text-emerald-500 hover:underline cursor-pointer">Register now</span>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center gap-6 text-zinc-600 text-xs font-medium uppercase tracking-widest">
          <span className="hover:text-emerald-500 transition-colors cursor-pointer">Privacy</span>
          <span className="hover:text-emerald-500 transition-colors cursor-pointer">Terms</span>
          <span className="hover:text-emerald-500 transition-colors cursor-pointer">Contact</span>
        </div>
      </div>
    </div>
  );
};
