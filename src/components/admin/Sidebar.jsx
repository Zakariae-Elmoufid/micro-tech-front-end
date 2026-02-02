import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Package,
    ShoppingCart,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const links = [
        {
            name: 'Dashboard',
            path: '/admin/',
            icon: LayoutDashboard,
            badge: null
        },
        {
            name: 'Clients',
            path: '/admin/clients',
            icon: Users,
            badge: '0'
        },
        {
            name: 'Prducts',
            path: '/admin/products',
            icon: Package,
            badge: null
        },
        {
            name: 'Orders',
            path: '/admin/orders',
            icon: ShoppingCart,
            badge: null
        },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    fixed lg:sticky top-0 left-0 h-screen
                    bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900
                    text-white flex flex-col
                    shadow-2xl z-50
                    transition-all duration-300 ease-in-out
                    ${isCollapsed ? 'w-20' : 'w-72'}
                    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
            >
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center justify-between">
                        {!isCollapsed && (
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-lg">A</span>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Admin Panel</h1>
                                    <p className="text-xs text-slate-400">SmartShop</p>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="hidden lg:flex p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {isCollapsed ? (
                                <ChevronRight className="w-5 h-5" />
                            ) : (
                                <ChevronLeft className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    {links.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => window.innerWidth < 1024 && onClose()}
                                className={({ isActive }) =>
                                    `
                                        group flex items-center gap-3 px-4 py-3 rounded-xl
                                        transition-all duration-200
                                        hover:bg-white/10 hover:translate-x-1
                                        ${isActive
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30'
                                        : 'text-slate-300 hover:text-white'
                                    }
                                    `
                                }
                                end={link.path === '/admin/'}

                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {({ isActive }) => (
                                    <>
                                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                                        {!isCollapsed && (
                                            <>
                                                <span className="flex-1 font-medium">{link.name}</span>
                                                {link.badge && (
                                                    <span className={`
                                                        px-2 py-1 text-xs font-semibold rounded-lg
                                                        ${isActive
                                                        ? 'bg-white/20 text-white'
                                                        : 'bg-indigo-500/20 text-indigo-300'
                                                    }
                                                    `}>
                                                        {link.badge}
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Footer Actions */}
                <div className="p-4 border-t border-white/10 space-y-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200">
                        <Settings className="w-5 h-5" />
                        {!isCollapsed && <span className="font-medium">Settings</span>}
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-all duration-200">
                        <LogOut className="w-5 h-5" />
                        {!isCollapsed && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </div>
        </>
    );
}