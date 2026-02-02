import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const links = [
        { name: 'Dashboard', path: '/' },
        { name: 'Clients', path: '/clients' },
        { name: 'Produits', path: '/products' },
        { name: 'Commandes', path: '/orders' },
    ];

    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <h1 className="text-2xl font-bold mb-6">Admin</h1>
            {links.map(link => (
                <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                        `px-4 py-2 rounded mb-2 hover:bg-gray-700 ${
                            isActive ? 'bg-gray-700 font-semibold' : ''
                        }`
                    }
                >
                    {link.name}
                </NavLink>
            ))}
        </div>
    );
}
