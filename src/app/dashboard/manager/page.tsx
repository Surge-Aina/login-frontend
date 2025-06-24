'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ManagerPage() {
    const router = useRouter();
    const [view, setView] = useState('my_workers');

    const handleLogout = () => {
        router.push('/');
    };

    const handleDeleteProfile = () => {
        if (window.confirm('Are you sure you want to delete your own profile?')) {
            handleLogout();
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 sm:mb-0">Manager Dashboard</h1>
                    <div>
                        <span className="text-gray-600 mr-4">Welcome, Manager User</span>
                        <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Logout</button>
                    </div>
                </header>

                <main className="space-y-8">
                    {/* Section: Add New Worker */}
                    <section className="bg-white p-6 rounded-lg shadow-md">
                         <h2 className="text-xl font-semibold mb-4 text-gray-700">Add a New Worker</h2>
                         <form className="flex flex-col sm:flex-row gap-4 items-end">
                            <div className="flex-grow w-full">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Worker Name</label>
                                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                            </div>
                             <div className="flex-grow w-full">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Worker Email</label>
                                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                            </div>
                            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 w-full sm:w-auto">Invite Worker</button>
                         </form>
                    </section>

                    {/* Section: Worker Lists */}
                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Worker Lists</h2>
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8">
                               <button onClick={() => setView('my_workers')} className={`py-4 px-1 border-b-2 font-medium text-sm ${view === 'my_workers' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>My Workers</button>
                               <button onClick={() => setView('all_workers')} className={`py-4 px-1 border-b-2 font-medium text-sm ${view === 'all_workers' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Overall Workers</button>
                               <button onClick={() => setView('active')} className={`py-4 px-1 border-b-2 font-medium text-sm ${view === 'active' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Who is Active</button>
                            </nav>
                        </div>
                         {/* Placeholder Table */}
                        <div className="mt-6">
                            <p className="text-gray-600">
                                {view === 'my_workers' && 'A table listing workers directly under your management.'}
                                {view === 'all_workers' && 'A table showing all workers in the company.'}
                                {view === 'active' && 'A table showing all currently active managers and workers.'}
                            </p>
                            <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                                Placeholder for Worker Table. Each row would have a Delete button.
                            </div>
                        </div>
                    </section>
                    
                    {/* Section: Danger Zone */}
                    <section className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
                         <h2 className="text-xl font-semibold text-red-800">Danger Zone</h2>
                         <div className="mt-2 flex items-center justify-between">
                             <p className="text-red-700">Permanently delete your own manager profile.</p>
                             <button onClick={handleDeleteProfile} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm">Delete My Profile</button>
                         </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
