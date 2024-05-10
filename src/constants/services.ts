import TrackPlayer from 'react-native-track-player'
import { Event } from 'react-native-track-player'

export const playbackServices = async () => {
	TrackPlayer.addEventListener(Event.RemotePlay, () => {
		TrackPlayer.play()
	})

	TrackPlayer.addEventListener(Event.RemotePause, () => {
		TrackPlayer.pause()
	})

	TrackPlayer.addEventListener(Event.RemoteNext, () => {
		TrackPlayer.skipToNext()
	})

	TrackPlayer.addEventListener(Event.RemotePrevious, () => {
		TrackPlayer.skipToPrevious()
	})

	TrackPlayer.addEventListener(Event.RemoteStop, () => {
		TrackPlayer.stop()
	})

	// TrackPlayer.addEventListener(Event.RemoteSeek, ({ position }) => {
	// 	// TrackPlayer.destroy();
	// 	console.log('remote seek:', position)
	// 	TrackPlayer.seekTo(position)
	// })
}
