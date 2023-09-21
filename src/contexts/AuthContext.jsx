import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, updateEmail, updatePassword, signOut } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth)
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth, email)
    }

    function updateEmailAddress(email){
        return updateEmail(auth, email)
    }

    function createNewPassword(password){
        return updatePassword(auth, password)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setIsAuthenticated(!!user);
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser, 
        isAuthenticated,
        signup,
        login,
        logout,
        resetPassword,
        updateEmailAddress,
        createNewPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
