import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SocialMedia = () => {
	useEffect(() => {
		GoogleSignin.configure({
			webClientId: '420351754653-ufhitf0pn3tbq7cjsrn1v7133u5k5c2o.apps.googleusercontent.com',
		})
	})

	async function onGoogleButtonPress() {
		// Check if your device supports Google Play
		await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
		// Get the users ID token
		const { idToken } = await GoogleSignin.signIn()

		// Create a Google credential with the token
		const googleCredential = auth.GoogleAuthProvider.credential(idToken)

		// Sign-in the user with the credential
		return auth().signInWithCredential(googleCredential)
	}
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onGoogleButtonPress}>
				<Image style={styles.image} source={require('@/assets/SocialMediaIcons/google.png')} />
			</TouchableOpacity>
			<Image style={styles.image} source={require('@/assets/SocialMediaIcons/facebook.png')} />
		</View>
	)
}

export default SocialMedia

const styles = StyleSheet.create({
	container: {
		marginTop: 12,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '100%',
		alignItems: 'center',
	},
	image: {
		height: 50,
		width: 50,
	},
})
