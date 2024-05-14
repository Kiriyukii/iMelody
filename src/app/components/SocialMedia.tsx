import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SocialMedia = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('@/assets/SocialMediaIcons/facebook.png')} />
			<Image style={styles.image} source={require('@/assets/SocialMediaIcons/google.png')} />
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
