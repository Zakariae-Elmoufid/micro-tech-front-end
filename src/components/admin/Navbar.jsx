import React from 'react';
import { Bell, Search, User, Settings, Menu } from 'lucide-react';

export default function Navbar({ onMenuClick }) {
    return (
        <div className="h-20 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 flex items-center justify-between px-8 shadow-sm sticky top-0 z-50">
            {/* Left Section */}
            <div className="flex items-center gap-6">
                {/* Mobile Menu Button */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors"
                >
                    <Menu className="w-6 h-6 text-slate-700" />
                </button>

                {/* Logo & Title */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <span className="text-white font-bold text-lg">S</span>
                    </div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                        SmartShop Admin
                    </h2>
                </div>
            </div>

            {/* Center - Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
                <div className="relative w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-transparent rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
                    />
                </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-3">
                {/* Notifications */}
                <button className="relative p-3 hover:bg-slate-100 rounded-xl transition-all duration-200 group">
                    <Bell className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
                </button>

                {/* Settings */}
                <button className="p-3 hover:bg-slate-100 rounded-xl transition-all duration-200 group">
                    <Settings className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors" />
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200">
                    <div className="hidden sm:block text-right">
                        <p className="text-sm font-semibold text-slate-700">Admin User</p>
                        <p className="text-xs text-slate-500">admin@smartshop.com</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200">
                        <User className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}