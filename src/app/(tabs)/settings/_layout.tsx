import { View } from 'react-native'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { colors } from '@/constants/tokens'
import { NormalStackScreen, StackScreenWithSearchBar } from '@/constants/layout'

const SettingsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: 'Settings',
						...NormalStackScreen,
						headerShown: false,
					}}
				/>
			</Stack>
		</View>
	)
}

export default SettingsScreenLayout
