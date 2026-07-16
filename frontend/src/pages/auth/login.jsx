import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await loginUser(email, password);
      localStorage.setItem('access_token', data.access_token);
      navigate('/student/application');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-sm flex-col rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-slate-950/40">
        <div className="p-6 sm:p-8">
          <Link to="/" className="text-xl font-semibold tracking-tight text-white">
            SmartLoan AI
          </Link>
          <h1 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
            Welcome back
          </h1>
          <p className="mt-3 text-slate-400">
            Sign in to continue with your loan application workflow.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-400">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none ring-0"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none ring-0"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            {error ? <p className="mt-3 text-sm text-rose-400">{error}</p> : null}
            <button
              type="submit"
              disabled={loading}
              className="mt-5 w-full rounded-full bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Signing in...' : 'Login'}
            </button>
            <p className="mt-4 text-center text-sm text-slate-500">
              Don’t have an account?{' '}
              <Link to="/register" className="text-sky-400 hover:text-sky-300">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
