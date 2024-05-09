import { View } from 'react-native'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { colors } from '@/constants/tokens'
import { StackScreenWithSearchBar } from '@/constants/layout'

const FavoritesScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: 'Favorites',
						...StackScreenWithSearchBar,
					}}
				/>
			</Stack>
		</View>
	)
}

export default FavoritesScreenLayout
