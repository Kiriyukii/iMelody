import { View } from 'react-native'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { colors } from '@/constants/tokens'
import { StackScreenWithSearchBar } from '@/constants/layout'

const PlaylistsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Playlists' }}
				/>
				<Stack.Screen
					name="[name]"
					options={{
						headerTitle: '',
						headerBackVisible: true,
						headerStyle: {
							backgroundColor: colors.background,
						},
						headerTintColor: colors.primary,
					}}
				/>
			</Stack>
		</View>
	)
}

export default PlaylistsScreenLayout
