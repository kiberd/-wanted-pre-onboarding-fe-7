import React, { useState, useEffect, useContext, createContext } from "react";

import { signIn, signUp, signOut } from "./api/api";

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};


function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = async (email, password) => {
        try {
            const response = await signIn(email, password);
            setUser(email);
            localStorage.setItem("user", email);
            localStorage.setItem("access_token", response.data.access_token);
            return response;
        } catch (error) {
            return error.response;
        }

    };

    const signup = async (email, password) => {
        try {
            const response = await signUp(email, password);
            return response;
        } catch (error) {
            return error.response;
        }
    };

    const signout = () => {
        setUser(false);
        localStorage.removeItem("access_token");
    };

    return {
        user,
        setUser,
        signin,
        signup,
        signout,
    };
}