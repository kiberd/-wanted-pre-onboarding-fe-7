import React, { useEffect } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import routes from './routes';
import { useAuth } from './hooks/useAuth';

const router = createBrowserRouter(routes);

const App = () => {

    const { setUser } = useAuth();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) setUser(user);
    }, []);

    return (
        <RouterProvider router={router} />
    );
};

export default App;