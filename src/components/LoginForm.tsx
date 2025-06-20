'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Component: LoginForm
 * Description:
 * - Renders a login form with email, password, and role selection.
 * - Validates inputs and stores user info in localStorage.
 * - Redirects to the dashboard upon successful login.
 */
export default function LoginForm() {
  // State: Stores email, password, and role input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('manager');
  const router = useRouter();

  /**
   * Function: handleSubmit
   * Parameters:
   *   e (React.FormEvent): Form submission event
   * Returns:
   *   void
   * Description:
   * - Prevents default form behavior.
   * - If both email and password are provided, stores the user data in localStorage
   *   and redirects to the dashboard.
   * - Alerts the user if required fields are missing.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email, role }));
      router.push('/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Login</h2>

      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input
          type="password"
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {/* Role Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="text-black w-full border rounded px-3 py-2"
        >
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="worker">Worker</option>
          <option value="customer">Customer</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Log In
      </button>

      <p className="text-black text-sm mt-4 text-center">
        Don&apos;t have an account?{' '}
        <a href="/signup" className="text-blue-600 underline hover:text-blue-800">
          Sign up here
        </a>
      </p>
    </form>
  );
}
