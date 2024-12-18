import React from 'react'; 
import { useStore } from '../store';
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const { state } = useStore();

    return (
        <>
            {state.isAuthenticated ? <>{children}</> : <Navigate to={"/auth"} />}
        </>
    )
}

export default Private;