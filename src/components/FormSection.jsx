export const FormSection = ({
                                title,
                                description,
                                children,
                                className = ''
                            }) => {
    return (
        <div className={`space-y-4 ${className}`}>
            {(title || description) && (
                <div className="mb-4">
                    {title && (
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">
                            {title}
                        </h3>
                    )}
                    {description && (
                        <p className="text-sm text-slate-600">
                            {description}
                        </p>
                    )}
                </div>
            )}
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
};
