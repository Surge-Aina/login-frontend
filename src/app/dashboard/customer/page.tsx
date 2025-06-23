'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CustomerDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) {
      router.push('/login');
      return;
    }

    const parsed = JSON.parse(stored);
    if (parsed.role !== 'Customer') {
      router.push(`/dashboard/${parsed.role.toLowerCase()}`);
    } else {
      setUser(parsed);
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Customer Dashboard</h1>
      <p className="mt-2 text-gray-700">Welcome, {user.email}</p>
    </div>
  );
}
