import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
import { colors } from '@/constants/tokens'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerTitleAlign: 'left',
	headerStyle: { backgroundColor: colors.background },
	headerTintColor: colors.text,
	headerShadowVisible: false,
	headerTitleStyle: {
		fontSize: 26,
	},
}
