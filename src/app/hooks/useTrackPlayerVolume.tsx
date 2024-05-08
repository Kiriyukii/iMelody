import { useCallback, useEffect, useState } from 'react'
import TrackPlayer from 'react-native-track-player'

export const useTrackPlayerVolume = () => {
	const [volume, setVolume] = useState<number | undefined>(undefined)

	const getVolume = useCallback(async () => {
		const currentVolumn = await TrackPlayer.getVolume()
		setVolume(currentVolumn)
	}, [])

	const updateVolume = useCallback(async (newVolume: number) => {
		if (newVolume < 0 || newVolume > 1) return
		setVolume(volume)
		await TrackPlayer.setVolume(newVolume)
	}, [])
	useEffect(() => {
		getVolume()
	}, [getVolume])

	return { volume, updateVolume }
}
