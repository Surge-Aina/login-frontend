'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

/**
 * Component: CustomerPage
 * Description:
 * - Renders the dashboard for a customer user.
 * - Displays a welcome message and a section for profile deletion.
 */
export default function CustomerPage() {
    const router = useRouter();

    /**
     * Function: handleLogout
     * Description:
     * - Logs the user out by redirecting to the homepage.
     */
    const handleLogout = () => {
        router.push('/');
    };

    /**
     * Function: handleDeleteProfile
     * Description:
     * - Prompts the user for confirmation before deleting their profile.
     * - If confirmed, it logs the user out.
     */
    const handleDeleteProfile = () => {
        if (window.confirm('Are you sure you want to delete your profile?')) {
            handleLogout();
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 sm:mb-0">Customer Dashboard</h1>
                     <div>
                        <span className="text-gray-600 mr-4">Welcome, Customer User</span>
                        <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Logout</button>
                    </div>
                </header>
                 <main className="space-y-8">
                    <section className="bg-white p-6 rounded-lg shadow-md">
                         <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to your Portal!</h2>
                         <p className="text-gray-700">This is a descriptive area for the customer. More features could be added here in the future.</p>
                    </section>
                    
                    <section className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
                         <h2 className="text-xl font-semibold text-red-800">Danger Zone</h2>
                         <div className="mt-2 flex items-center justify-between">
                             <p className="text-red-700">Permanently delete your account.</p>
                             <button onClick={handleDeleteProfile} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm">Delete My Profile</button>
                         </div>
                    </section>
                </main>
            </div>
        </div>
    );
}