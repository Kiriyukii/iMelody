import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
import { colors } from '@/constants/tokens'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerLargeTitle: true,
	headerLargeStyle: {
		backgroundColor: colors.background,
	},
	headerLargeTitleStyle: {
		color: colors.text,
	},
	headerTintColor: colors.text,
	headerTransparent: false,
	headerBlurEffect: 'prominent',
	headerShadowVisible: false,
}
