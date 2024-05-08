import TrackPlayer from 'react-native-track-player'
import { Event } from 'react-native-track-player'

module.exports = async function () {
	TrackPlayer.addEventListener(Event.RemotePlay, () => {
		console.log('remote play clicked')
		TrackPlayer.play()
	})

	TrackPlayer.addEventListener(Event.RemotePause, () => {
		console.log('remote pause clicked')
		TrackPlayer.pause()
	})

	TrackPlayer.addEventListener(Event.RemoteNext, () => {
		TrackPlayer.skipToNext()
	})

	TrackPlayer.addEventListener(Event.RemotePrevious, () => {
		TrackPlayer.skipToPrevious()
	})

	TrackPlayer.addEventListener(Event.RemoteStop, () => {
		console.log('Destroy track')
	})

	TrackPlayer.addEventListener(Event.RemoteSeek, ({ position }) => {
		// TrackPlayer.destroy();
		console.log('remote seek:', position)
		TrackPlayer.seekTo(position)
	})
}
