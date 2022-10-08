import Login from "./pages/Login";
import Register from "./pages/Register";
import Todo from "./pages/Todo";

import ProtectedRoute from "./ProtectedRoute";

import DefaultLayout from "./layout/DefaultLayout";
import MainLayout from "./layout/MainLayout";

const routes = [
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <MainLayout>
                    <Todo />
                </MainLayout>
            </ProtectedRoute>
        )
    },
    {
        path: '/login',
        element: (
            <DefaultLayout>
                <Login />
            </DefaultLayout>
        )
    },
    {
        path: '/register',
        element: (
            <DefaultLayout>
                <Register />
            </DefaultLayout>
        )
    },
    {
        path: '/todo',
        element: (
            <ProtectedRoute>
                <MainLayout>
                    <Todo />
                </MainLayout>
            </ProtectedRoute>
        )
    }
];

export default routes;
