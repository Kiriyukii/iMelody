import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useSetupTrackPlayer } from './hooks/useSetupTrackPlayer'
import { SplashScreen } from 'expo-router'
import { useCallback } from 'react'
import { useLogTrackPlayerState } from './hooks/useLogTrackPlayerState'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { colors } from '@/constants/tokens'
import TrackPlayer from 'react-native-track-player'
import { playbackServices } from '../constants/services'
import { AuthProvider } from '@/context/AuthContext'

SplashScreen.preventAutoHideAsync()

//TrackPlayer.registerPlaybackService(() => playbackServices)

const App = () => {
	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])

	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	})

	useLogTrackPlayerState()
	return (
		<AuthProvider>
			<SafeAreaProvider>
				<GestureHandlerRootView style={{ flex: 1 }}>
					<RootNavigation />
					<StatusBar style="auto" />
				</GestureHandlerRootView>
			</SafeAreaProvider>
		</AuthProvider>
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

export default App
