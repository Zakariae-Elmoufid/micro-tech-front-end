export const Radio = ({
                          label,
                          name,
                          value,
                          checked = false,
                          onChange,
                          disabled = false,
                          className = '',
                          ...props
                      }) => {
    const radioId = `radio-${name}-${value}`;

    return (
        <div className={`flex items-start ${className}`}>
            <div className="flex items-center h-6">
                <input
                    id={radioId}
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    className={`
            w-5 h-5
            text-indigo-600 focus:ring-4 focus:ring-indigo-100
            disabled:opacity-60 disabled:cursor-not-allowed
            cursor-pointer transition-all duration-200
            border-slate-300
          `}
                    {...props}
                />
            </div>
            {label && (
                <label
                    htmlFor={radioId}
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
