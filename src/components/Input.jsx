import React from 'react';

export const Input = ({
                          type = 'text',
                          placeholder = '',
                          value,
                          onChange,
                          label,
                          error,
                          helperText,
                          required = false,
                          disabled = false,
                          icon,
                          className = '',
                          ...props
                      }) => {
    const inputId = `input-${label?.toLowerCase().replace(/\s+/g, '-') || Math.random()}`;

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-semibold text-slate-700 mb-2"
                >
                    {label}
                    {required && <span className="text-rose-500 ml-1">*</span>}
                </label>
            )}

            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        {icon}
                    </div>
                )}

                <input
                    id={inputId}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    className={`
            w-full px-4 py-3 
            ${icon ? 'pl-10' : ''}
            bg-white border-2 rounded-xl
            text-slate-900 placeholder:text-slate-400
            transition-all duration-200
            focus:outline-none focus:ring-4
            disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60
            ${error
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-100'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'
                    }
          `}
                    {...props}
                />
            </div>

            {error && (
                <p className="mt-2 text-sm text-rose-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                </p>
            )}

            {helperText && !error && (
                <p className="mt-2 text-sm text-slate-500">{helperText}</p>
            )}
        </div>
    );
};