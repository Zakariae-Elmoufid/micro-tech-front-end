export const FormActions = ({
                                children,
                                align = 'right',
                                className = ''
                            }) => {
    const alignments = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
        between: 'justify-between'
    };

    return (
        <div className={`flex gap-3 pt-4 ${alignments[align]} ${className}`}>
            {children}
        </div>
    );
};