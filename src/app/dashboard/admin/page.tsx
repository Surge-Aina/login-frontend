'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Component: AdminPage
 * Description:
 * - Renders the main dashboard for an admin user.
 * - Allows the admin to view and manage users, invitations, and their own profile.
 */
export default function AdminPage() {
  const router = useRouter();
  const [view, setView] = useState('all'); // To control which placeholder table is shown

  /**
   * Function: handleLogout
   * Description:
   * - Logs the user out by redirecting to the homepage.
   * - In a real application, this would also clear authentication tokens.
   */
  const handleLogout = () => {
    // In a real app, you'd clear auth tokens
    router.push('/');
  };

  /**
   * Function: handleDeleteProfile
   * Description:
   * - Prompts the user for confirmation before deleting their own profile.
   * - If confirmed, it logs the user out.
   */
  const handleDeleteProfile = () => {
      if (window.confirm('Are you sure you want to delete your own profile?')) {
          handleLogout();
      }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 sm:mb-0">Admin Dashboard</h1>
          <div>
            <span className="text-gray-600 mr-4">Welcome, Admin User</span>
            <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Logout</button>
          </div>
        </header>

        {/* --- Main Content --- */}
        <main className="space-y-8">
            {/* Section: Add New User */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                 <h2 className="text-xl font-semibold mb-4 text-gray-700">Add a New User</h2>
                 <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div className="md:col-span-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                     <div className="md:col-span-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                        <select id="role" className="text-black mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                            <option>Worker</option>
                            <option>Manager</option>
                            <option>Admin</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 h-fit">Add User</button>
                 </form>
            </section>

            {/* Section: Invitations */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">New Invitations / Requests</h2>
                <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <p className="text-gray-800">new.manager@example.com <span className="text-sm text-gray-500">(Manager)</span></p>
                        <div>
                            <button className="bg-green-500 text-white px-3 py-1 rounded-md mr-2 text-sm hover:bg-green-600">Accept</button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600">Deny</button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <p className="text-gray-800">new.worker@example.com <span className="text-sm text-gray-500">(Worker)</span></p>
                         <div>
                            <button className="bg-green-500 text-white px-3 py-1 rounded-md mr-2 text-sm hover:bg-green-600">Accept</button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600">Deny</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: User Lists */}
             <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">User Lists</h2>
                {/* Tabs */}
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        <button onClick={() => setView('all')} className={`py-4 px-1 border-b-2 font-medium text-sm ${view === 'all' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>All Users</button>
                        <button onClick={() => setView('manager')} className={`py-4 px-1 border-b-2 font-medium text-sm ${view === 'manager' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Managers</button>
                        <button onClick={() => setView('worker')} className={`py-4 px-1 border-b-2 font-medium text-sm ${view === 'worker' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Workers</button>
                         <button onClick={() => setView('customer')} className={`py-4 px-1 border-b-2 font-medium text-sm ${view === 'customer' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Customers</button>
                    </nav>
                </div>
                {/* Placeholder Table */}
                <div className="mt-6">
                    <h3 className="font-bold text-lg mb-2">{view.charAt(0).toUpperCase() + view.slice(1)} Table</h3>
                    <p className="text-gray-600">A table listing all <span className="font-semibold">{view}</span> users would appear here. Users would have options to be edited or deleted.</p>
                    <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                        Placeholder for User Table Component
                    </div>
                </div>
            </section>

             {/* Section: Danger Zone */}
            <section className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
                 <h2 className="text-xl font-semibold text-red-800">Danger Zone</h2>
                 <div className="mt-2 flex items-center justify-between">
                     <p className="text-red-700">Permanently delete your own admin profile.</p>
                     <button onClick={handleDeleteProfile} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm">Delete My Profile</button>
                 </div>
            </section>
        </main>
      </div>
    </div>
  );
}