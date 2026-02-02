export const Form = ({
                         onSubmit,
                         children,
                         title,
                         description,
                         className = '',
                         ...props
                     }) => {
    return (
        <form
            onSubmit={onSubmit}
            className={`space-y-6 ${className}`}
            {...props}
        >
            {(title || description) && (
                <div className="mb-8">
                    {title && (
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-slate-600">
                            {description}
                        </p>
                    )}
                </div>
            )}
            {children}
        </form>
    );
};


