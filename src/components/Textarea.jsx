import React from "react";

export const Textarea = ({
                             placeholder = '',
                             value,
                             onChange,
                             label,
                             error,
                             helperText,
                             required = false,
                             disabled = false,
                             rows = 4,
                             className = '',
                             ...props
                         }) => {
    const textareaId = `textarea-${label?.toLowerCase().replace(/\s+/g, '-') || Math.random()}`;

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label
                    htmlFor={textareaId}
                    className="block text-sm font-semibold text-slate-700 mb-2"
                >
                    {label}
                    {required && <span className="text-rose-500 ml-1">*</span>}
                </label>
            )}

            <textarea
                id={textareaId}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                rows={rows}
                className={`
          w-full px-4 py-3 
          bg-white border-2 rounded-xl
          text-slate-900 placeholder:text-slate-400
          transition-all duration-200
          focus:outline-none focus:ring-4
          disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60
          resize-none
          ${error
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-100'
                    : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'
                }
        `}
                {...props}
            />

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

