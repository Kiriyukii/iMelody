import { View, ViewProps } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '@/constants/tokens'
import { utilStyles } from '@/styles'
import { Slider } from 'react-native-awesome-slider'
import { useTrackPlayerVolume } from '../hooks/useTrackPlayerVolume'

export const PlayerVolumeBar = ({ style }: ViewProps) => {
	const { volume, updateVolume } = useTrackPlayerVolume()
	const progress = useSharedValue(0)
	const min = useSharedValue(0)
	const max = useSharedValue(1)

	progress.value = volume ?? 0

	return (
		<View style={style}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Ionicons name="volume-low" size={20} color={colors.icon} style={{ opacity: 0.8 }} />
				<Slider
					progress={progress}
					minimumValue={min}
					containerStyle={utilStyles.slider}
					onValueChange={(value) => {
						updateVolume(value)
					}}
					renderBubble={() => null}
					theme={{
						maximumTrackTintColor: colors.maximumTrackTintColor,
						minimumTrackTintColor: colors.minimumTrackTintColor,
					}}
					thumbWidth={0}
					maximumValue={max}
				/>
				<Ionicons name="volume-high" size={20} color={colors.icon} style={{ opacity: 0.8 }} />
			</View>
		</View>
	)
}
