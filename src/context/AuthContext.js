import React, { createContext, useState, useContext, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import auth from '@react-native-firebase/auth'
const AuthContext = createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [initializing, setInitializing] = useState(true)

	function onAuthStateChanged(user) {
		setUser(user)
		setIsAuthenticated(!!user)
		if (initializing) setInitializing(false)
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
		console.log('user', user)
		return subscriber
	}, [])

	const signIn = async (email, password) => {
		try {
			await auth().signInWithEmailAndPassword(email, password)
			console.log('Signed in!')
			setIsAuthenticated(true)
			return { success: true }
		} catch (error) {
			let msg = error.message
			if (msg.includes('auth/invalid-email')) {
				msg = 'That email address is invalid!'
			}
			if (msg.includes('auth/invalid-credential')) {
				msg = 'Email or password is wrong!'
			}

			return { success: false, msg }
		}
	}

	const signUp = async (email, password) => {
		try {
			await auth().createUserWithEmailAndPassword(email, password)
			console.log('User account created & signed in!')
			setIsAuthenticated(true)
			return { success: true }
		} catch (error) {
			let msg = error.message
			if (msg.includes('auth/email-already-in-use')) {
				msg = 'That email address is already in use!'
			}

			if (msg.includes('auth/invalid-email')) {
				msg = 'That email address is invalid!'
			}
			return { success: false, msg }
		}
	}

	const signOut = async () => {
		try {
			await auth().signOut()
			setIsAuthenticated(false)
			return { success: true }
		} catch (error) {
			return { success: false, msg: error.message, error: error }
		}
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, signIn, signUp, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}
