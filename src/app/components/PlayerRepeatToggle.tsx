import { ComponentProps } from 'react'
import { RepeatMode } from 'react-native-track-player'
import { match } from 'ts-pattern'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const repeatOrder = [RepeatMode.Off, RepeatMode.Track, RepeatMode.Queue] as const

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name']

export const PlayerRepeatToggle = () => {
	const repeatMode = RepeatMode.Off

	const icon = match(repeatMode)
		.returnType<IconName>()
		.with(RepeatMode.Off, () => 'repeat-off')
		.with(RepeatMode.Track, () => 'repeat-once')
		.with(RepeatMode.Queue, () => 'repeat')
		.otherwise(RepeatMode.Off)
}
