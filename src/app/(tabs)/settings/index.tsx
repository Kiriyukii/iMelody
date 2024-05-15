import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/styles'
import { useAuth } from '@/context/AuthContext'

const SettingsScreen = () => {
	const { signOut } = useAuth()
	const handleSignOut = async () => {
		await signOut()
	}
	return (
		<SafeAreaView style={defaultStyles.container}>
			<View style={styles.section}>
				<Text style={styles.sectionHeader}>About</Text>
				<Pressable onPress={handleSignOut}>
					<Text style={styles.sectionHeader}>Sign Out</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}

export default SettingsScreen

const styles = StyleSheet.create({
	section: {
		paddingHorizontal: 24,
		paddingTop: 40,
	},
	sectionHeader: {
		color: 'white',
		paddingVertical: 12,
		fontSize: 24,
		letterSpacing: 1.1,
		textTransform: 'uppercase',
		fontWeight: '600',
	},
})
