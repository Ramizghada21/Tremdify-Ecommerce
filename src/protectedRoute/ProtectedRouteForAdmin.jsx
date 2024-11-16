import { Navigate } from 'react-router-dom';

export const ProtectedRouteForAdmin = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('users')); // Correctly parse the user data

    if (user?.role === "admin") { // Check if user is an admin
        return children;
    } else {
        return <Navigate to='/login' />; // Redirect to login if not an admin
    }
};
