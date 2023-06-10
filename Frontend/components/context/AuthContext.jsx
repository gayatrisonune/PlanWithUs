import { fetchData } from '../utils/Rest'
import { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext();
export default function AuthProvider({ children }) {

    const [user, setUser] = useState();


    const fetchUser = async () => {
        const res = await fetchData('auth/getuser', true)
        console.log(res);
        setUser(res.data.data);
    }

    const ctx = {
        fetchUser,
        user
    }

    useEffect(() => {
        fetchUser();
    }, [])


    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    )
}

