import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style="auto" backgroundColor="green" />
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
		</Stack>
	)
}

export default App
