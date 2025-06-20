'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Component: DashboardPage
 * Description:
 * - Displays a role-based dashboard after successful login.
 * - Redirects to login page if no user data is found in localStorage.
 */

export default function DashboardPage() {
  const router = useRouter();

  // State: Stores the logged-in user’s email and role
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);

  /**
   * useEffect:
   * Description:
   * - Runs on component mount.
   * - Checks localStorage for saved user data.
   * - If no user is found, redirects to login page.
   */
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) {
      router.push('/login');
    } else {
      setUser(JSON.parse(stored));
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Welcome, {user.role}</h1>
      <p className="text-gray-700 mt-2">Logged in as: {user.email}</p>
    </div>
  );
}
