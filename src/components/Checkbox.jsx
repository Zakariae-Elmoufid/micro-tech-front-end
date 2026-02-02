export const Checkbox = ({
                             label,
                             checked = false,
                             onChange,
                             disabled = false,
                             error,
                             className = '',
                             ...props
                         }) => {
    const checkboxId = `checkbox-${label?.toLowerCase().replace(/\s+/g, '-') || Math.random()}`;

    return (
        <div className={`flex items-start ${className}`}>
            <div className="flex items-center h-6">
                <input
                    id={checkboxId}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    className={`
            w-5 h-5 rounded-lg border-2
            text-indigo-600 focus:ring-4 focus:ring-indigo-100
            disabled:opacity-60 disabled:cursor-not-allowed
            cursor-pointer transition-all duration-200
            ${error ? 'border-rose-400' : 'border-slate-300'}
          `}
                    {...props}
                />
            </div>
            {label && (
                <label
                    htmlFor={checkboxId}
                    className={`ml-3 text-sm font-medium cursor-pointer select-none ${
                        disabled ? 'text-slate-400' : 'text-slate-700'
                    }`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};
