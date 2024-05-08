import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { utilStyles } from '@/styles'
import { hp, wp } from '../helpers/common'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { colors, fontSize } from '@/constants/tokens'
import { useRouter } from 'expo-router'
import TrackPlayer from 'react-native-track-player'

TrackPlayer.registerPlaybackService(() => require('./services'))

const WelcomeScreen = () => {
	const router = useRouter()
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Image source={require('@/assets/welcome.png')} style={styles.bgImage} resizeMode="cover" />
			<Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
				<LinearGradient
					colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.5)', 'white', 'white']}
					style={styles.gradient}
					start={{ x: 0.5, y: 0 }}
					end={{ x: 0.5, y: 0.8 }}
				/>
				<View style={styles.contentContainer}>
					<Animated.Text entering={FadeInDown.delay(400).springify()} style={styles.title}>
						iMelody
					</Animated.Text>
					<Animated.Text entering={FadeInDown.delay(500).springify()} style={styles.punchline}>
						Every Song Tells a Story
					</Animated.Text>
					<Animated.View entering={FadeInDown.delay(600).springify()}>
						<Pressable onPress={() => router.push('/(tabs)/(songs)')} style={styles.startButton}>
							<Text style={styles.startText}>Start Explore</Text>
						</Pressable>
					</Animated.View>
				</View>
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bgImage: {
		width: wp(100),
		height: hp(100),
		position: 'absolute',
	},
	gradient: {
		width: wp(100),
		height: hp(65),
		bottom: 0,
		position: 'absolute',
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		gap: 14,
	},
	title: {
		fontSize: hp(7),
		color: '#1c1c1c',
		fontWeight: '700',
	},
	punchline: {
		fontSize: hp(2),
		letterSpacing: 1,
		marginBottom: 10,
		fontWeight: '500',
	},
	startButton: {
		marginBottom: 50,
		backgroundColor: colors.primary,
		padding: 15,
		paddingHorizontal: 90,
		borderRadius: 14,
		borderCurve: 'continuous',
	},
	startText: {
		color: '#fff',
		fontSize: hp(3),
		fontWeight: '500',
		letterSpacing: 1,
	},
})

export default WelcomeScreen
