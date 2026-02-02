import  React from 'react';

export const Button = ({
                           children,
                           onClick,
                           type = 'button',
                           variant = 'primary',
                           size = 'md',
                           disabled = false,
                           loading = false,
                           fullWidth = false,
                           leftIcon,
                           rightIcon,
                           className = '',
                           ...props
                       }) => {
    const variants = {
        primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40',
        secondary: 'bg-slate-600 hover:bg-slate-700 text-white shadow-lg shadow-slate-500/30',
        outline: 'bg-white border-2 border-slate-300 hover:border-indigo-500 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50',
        danger: 'bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-500/30',
        success: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30',
        ghost: 'bg-transparent hover:bg-slate-100 text-slate-700'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        font-semibold rounded-xl
        transition-all duration-200
        disabled:opacity-60 disabled:cursor-not-allowed
        active:scale-95
        flex items-center justify-center gap-2
        ${className}
      `}
            {...props}
        >
            {loading ? (
                <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Loading...</span>
                </>
            ) : (
                <>
                    {leftIcon && <span>{leftIcon}</span>}
                    {children}
                    {rightIcon && <span>{rightIcon}</span>}
                </>
            )}
        </button>
    );
};