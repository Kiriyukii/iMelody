import { StatusBar } from 'expo-status-bar'
import { Slot, Stack, router, useSegments } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useSetupTrackPlayer } from './hooks/useSetupTrackPlayer'
import { SplashScreen } from 'expo-router'
import { useCallback, useEffect } from 'react'
import { useLogTrackPlayerState } from './hooks/useLogTrackPlayerState'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { colors } from '@/constants/tokens'
import TrackPlayer from 'react-native-track-player'
import { playbackServices } from '../constants/services'
import { AuthProvider, useAuth } from '@/context/AuthContext'

SplashScreen.preventAutoHideAsync()

//TrackPlayer.registerPlaybackService(() => playbackServices)

const RootLayout = () => {
	const { initializing, isAuthenticated } = useAuth()
	const segments = useSegments()

	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])

	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	})

	useEffect(() => {
		if (initializing || typeof isAuthenticated === 'undefined') return
		const inApp = segments[0] === '(tabs)'
		const inPlayer = segments[0] === '(player)'
		if (isAuthenticated && !inApp && !inPlayer) {
			router.replace('/(tabs)/(songs)')
		} else if (!isAuthenticated && segments[0] !== '(auth)') {
			console.log('You need to sign in')
			router.replace('/(auth)/signIn')
		}
	}, [initializing, isAuthenticated, router, segments])

	useLogTrackPlayerState()
	return (
		<SafeAreaProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Slot />
				{/* <RootNavigation /> */}
				<StatusBar style="auto" />
			</GestureHandlerRootView>
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />

			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />

			<Stack.Screen
				name="player"
				options={{
					presentation: 'card',
					gestureEnabled: true,
					gestureDirection: 'vertical',
					animationDuration: 400,
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="(modals)/addToPlaylist"
				options={{
					presentation: 'modal',
					headerStyle: {
						backgroundColor: colors.background,
					},
					headerTitle: 'Add to playlist',
					headerTitleStyle: {
						color: colors.text,
					},
				}}
			/>
			<Stack.Screen name="(auth)/signIn" options={{ headerShown: false }} />
			<Stack.Screen name="(auth)/signUp" options={{ headerShown: false }} />
		</Stack>
	)
}

export default function App() {
	return (
		<AuthProvider>
			<RootLayout />
		</AuthProvider>
	)
}
