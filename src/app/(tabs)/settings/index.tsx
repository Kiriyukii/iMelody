import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/styles'
import { useAuth } from '@/context/AuthContext'

const SettingsScreen = () => {
	const { signOut } = useAuth()
	const handleSignOut = async () => {
		await signOut()
	}
	return (
		<View style={defaultStyles.container}>
			<Pressable onPress={handleSignOut}>
				<Text style={{ color: 'white' }}>Sign Out</Text>
			</Pressable>
		</View>
	)
}

export default SettingsScreen

const styles = StyleSheet.create({})
