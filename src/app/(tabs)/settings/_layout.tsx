import { View } from 'react-native'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { colors } from '@/constants/tokens'
import { StackScreenWithSearchBar } from '@/constants/layout'

const SettingsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: 'Settings',
					}}
				/>
			</Stack>
		</View>
	)
}

export default SettingsScreenLayout
