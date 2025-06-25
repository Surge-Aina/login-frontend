'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getDashboardPath } from '@/utils/roleRedirect'; // Assuming you have this file
import { GoogleSignInButton } from './GoogleSignInButton'; // Make sure this path is correct

/**
 * Component: LoginForm
 * Description:
 * - Renders a login form with email, password, and role selection.
 * - Integrates standard login with Google Sign-In.
 */
export default function LoginForm() {
  // State: Stores email, password, and role input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('manager');
  const router = useRouter();

  /**
   * Function: handleSubmit
   * Description:
   * - Handles the standard email/password form submission.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // Your existing logic for email/password login
      const user = { email, role };
      localStorage.setItem('user', JSON.stringify({ user }));
      router.push(getDashboardPath(role));
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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Log In
      </button>

      <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
      </div>

      {/* Google Sign-In Button */}
      <div className="mt-6">
        <GoogleSignInButton />
      </div>

      <p className="text-black text-sm mt-4 text-center">
        Don&apos;t have an account?{' '}
        <a href="/signup" className="text-blue-600 underline hover:text-blue-800">
          Sign up here
        </a>
      </p>
    </form>
  );
}