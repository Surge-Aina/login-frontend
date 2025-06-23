'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getDashboardPath } from '@/utils/roleRedirect';

/**
 * Page: Google Redirect Handler
 * Description:
 * - Gets user info from the backend (e.g., from cookies/session)
 * - Stores it in localStorage
 * - Redirects to correct dashboard
 */
export default function GoogleRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
          credentials: 'include',
        });
        const user = await res.json();

        if (user?.email && user?.role) {
          localStorage.setItem('user', JSON.stringify(user));
          router.push(getDashboardPath(user.role));
        } else {
          router.push('/login');
        }
      } catch (err) {
        console.error(err);
        router.push('/login');
      }
    }

    fetchUser();
  }, [router]);

  return <p className="text-center mt-10">Logging in with Google...</p>;
}
