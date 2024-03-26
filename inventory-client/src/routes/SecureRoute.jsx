import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthServices } from '../services';

export const SecureRoute = ({children}) => {
    const isAuthenticated = AuthServices.hasToken();

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />
    }
    
    return children;
}

export default SecureRoute;