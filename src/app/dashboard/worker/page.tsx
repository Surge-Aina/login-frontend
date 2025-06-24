'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function WorkerPage() {
    const router = useRouter();

    const handleLogout = () => {
        router.push('/');
    };
    
    const handleDeleteProfile = () => {
        if (window.confirm('Are you sure you want to delete your profile?')) {
            handleLogout();
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">
                 <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 sm:mb-0">Worker Dashboard</h1>
                     <div>
                        <span className="text-gray-600 mr-4">Welcome, Worker User</span>
                        <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Logout</button>
                    </div>
                </header>
                <main className="space-y-8">
                    <section className="bg-white p-6 rounded-lg shadow-md">
                         <h2 className="text-xl font-semibold text-gray-800 mb-4">My Information</h2>
                         <div className="space-y-2 text-gray-700">
                            <p><strong>My Manager is:</strong> Manager Alice</p>
                            <p><strong>Description:</strong> This area shows the worker who their assigned manager is.</p>
                         </div>
                    </section>
                    
                    <section className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
                         <h2 className="text-xl font-semibold text-red-800">Danger Zone</h2>
                         <div className="mt-2 flex items-center justify-between">
                             <p className="text-red-700">Permanently delete your profile.</p>
                             <button onClick={handleDeleteProfile} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm">Delete My Profile</button>
                         </div>
                    </section>
                </main>
            </div>
        </div>
    );
}