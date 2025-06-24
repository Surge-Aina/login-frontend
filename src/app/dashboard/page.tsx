'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function DemoHomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          User Role Dashboards
        </h1>
        <p className="mt-2 text-gray-600">
          Select a dashboard to view its layout.
        </p>
      </div>
      <div className="mt-8 bg-white py-8 px-6 shadow rounded-lg w-full max-w-md">
        <div className="space-y-4">
            <button
              onClick={() => router.push('/admin')}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View Admin Dashboard
            </button>
            <button
              onClick={() => router.push('/manager')}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              View Manager Dashboard
            </button>
             <button
              onClick={() => router.push('/worker')}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              View Worker Dashboard
            </button>
            <button
              onClick={() => router.push('/customer')}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              View Customer Dashboard
            </button>
        </div>
      </div>
    </div>
  );
}