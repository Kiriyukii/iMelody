import { screenPadding } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const PlayerScreen = () => {
	return (
		<View style={styles.overlayContainer}>
			<DismissPlayerSymbol />
		</View>
	)
}
const DismissPlayerSymbol = () => {
	const { top } = useSafeAreaInsets()
	return (
		<View
			style={{
				position: 'absolute',
				top: top + 8,
				left: 0,
				right: 0,
				flexDirection: 'row',
				justifyContent: 'center',
			}}
		>
			<View
				accessible={false}
				style={{
					width: 50,
					height: 8,
					borderRadius: 9,
					backgroundColor: '#fff',
					opacity: 0.7,
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	overlayContainer: {
		...defaultStyles.container,
		paddingHorizontal: screenPadding.horizontal,
		backgroundColor: 'rgba(0,0,0,0,5)',
	},
})

export default PlayerScreen
