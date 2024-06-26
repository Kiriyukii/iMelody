import { colors, fontSize } from '@/constants/tokens'
import { StyleSheet } from 'react-native'
export const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		fontSize: fontSize.base,
		color: colors.text,
	},
})

export const utilStyles = StyleSheet.create({
	slider: {
		height: 7,
		borderRadius: 16,
	},
	itemSeparator: {
		borderColor: colors.textMuted,
		borderWidth: StyleSheet.hairlineWidth,
		opacity: 0.3,
	},
	emptyComponentText: {
		...defaultStyles.text,
		color: colors.textMuted,
		textAlign: 'center',
		marginTop: 20,
	},
	emptyContentImage: {
		width: 200,
		height: 200,
		opacity: 0.3,
		alignSelf: 'center',
		marginTop: 40,
	},
	centeredRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
