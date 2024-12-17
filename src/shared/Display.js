import React from 'react';

// Higher-Order Component
const Display = ({ condition, children }) => {
    return condition ? <>{children}</> : null;
};

export default Display;
