import React, {createContext, useContext, useState, useEffect} from 'react';

interface User {
    username: String;
}

interface AuthContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {}
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(()=>{
        const fetchUser = async () =>{

        };
        fetchUser();
    }, []);

    const login = (user:User) => setUser(user);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value = {{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}