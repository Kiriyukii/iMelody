import React, { useState } from 'react'
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Pressable,
	Text,
	TouchableOpacity,
} from 'react-native'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'expo-router'
import { colors } from '@/constants/tokens'
import { wp, hp } from '@/helpers/common'
import { LinearGradient } from 'expo-linear-gradient'
import SocialMedia from '../components/SocialMedia'

export default function SignUp() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const { signUp } = useAuth()
	const router = useRouter()

	const handleSignUp = () => {
		if (password !== confirmPassword) {
			alert('Passwords do not match!')
			return
		}
		signUp({ email, password })
		router.push('/(tabs)/(songs)')
	}

	return (
		<LinearGradient style={{ flex: 1 }} colors={['#EE5A24', colors.primary, 'transparent']}>
			<View style={styles.container}>
				<Text style={styles.title}>iMelody</Text>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder="Email"
						value={email}
						onChangeText={setEmail}
						style={styles.input}
					/>
					<TextInput
						placeholder="Password"
						secureTextEntry
						value={password}
						onChangeText={setPassword}
						style={styles.input}
					/>
					<TextInput
						placeholder="Confirm Password"
						secureTextEntry
						value={confirmPassword}
						onChangeText={setConfirmPassword}
						style={styles.input}
					/>
					<Pressable style={styles.button} onPress={handleSignUp}>
						<Text style={styles.insideText}>Sign Up</Text>
					</Pressable>
					<Pressable onPress={() => router.push('/(auth)/signIn')} style={styles.linkButton}>
						<Text style={styles.linkText}>Already have an account? Sign In</Text>
					</Pressable>
				</View>
			</View>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderRadius: 12,
		borderWidth: 1,
		marginBottom: 12,
		paddingHorizontal: 8,
	},
	bgImage: {
		width: wp(100),
		height: hp(100),
		position: 'absolute',
		opacity: 0.8,
	},
	button: {
		backgroundColor: colors.primary,
		marginTop: 10,
		padding: 11,
		borderRadius: 26,
		borderCurve: 'continuous',
	},
	insideText: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 14,
		fontWeight: '500',
		letterSpacing: 1,
	},
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
		maxHeight: hp(45),
		borderRadius: 12,
		backgroundColor: 'white',
	},
	title: {
		color: 'white',
		textAlign: 'center',
		marginBottom: 40,
		fontFamily: 'Audiowide-Regular',
		fontSize: 40,
	},
	signUpText: {
		alignSelf: 'flex-end',
		marginRight: 4,
		color: 'black',
		marginBottom: 4,
	},
	orText: {
		color: 'gray',
		fontSize: 20,
		textAlign: 'center',
		marginTop: 12,
		fontFamily: 'Audiowide-Regular',
	},
	linkButton: {
		marginTop: 20,
	},
	linkText: {
		textAlign: 'center',
		color: colors.primary,
		fontSize: 14,
		textDecorationLine: 'underline',
	},
})
