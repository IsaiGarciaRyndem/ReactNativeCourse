import {createContext, useState} from "react";

export const AuthContext = createContext({
   token: '',
   isAuthenticated: false,
   authenticate: (token) => {},
   loggout: () => {}
});

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState();

    function authenticate(token) {
        setAuthToken(token)
    }

    function logout() {
        setAuthToken(null);
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authToken,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;
