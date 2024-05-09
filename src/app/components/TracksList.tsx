import { FlatList, FlatListProps, View, Text } from 'react-native'
import library from '@/assets/data/library.json'
import { TracksListItem } from '@/app/components/TrackListItems'
import { utilStyles } from '@/styles'
import TrackPlayer, { Track } from 'react-native-track-player'
import FastImage from 'react-native-fast-image'
import { unknownTrackImageUri } from '@/constants/images'
import { useQueue } from '@/store/queue'
import { useRef } from 'react'

export type TracksListProps = Partial<FlatListProps<Track>> & {
	id: string
	tracks: Track[]
}
const ItemDivider = () => (
	<View style={{ ...utilStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)
export const TracksList = ({ id, tracks, ...flatlistProps }: TracksListProps) => {
	const queueOffset = useRef(0)

	const { activeQueueId, setActiveQueueId } = useQueue()

	const handleTrackSelect = async (selectedTrack: Track) => {
		const trackIndex = tracks.findIndex((track) => track.url === selectedTrack.url)

		if (trackIndex === -1) return

		const isChangingQueue = id !== activeQueueId

		if (isChangingQueue) {
		} else {
		}
		// await TrackPlayer.load(track)
		// await TrackPlayer.play()
	}
	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ListFooterComponent={ItemDivider}
			ItemSeparatorComponent={ItemDivider}
			ListEmptyComponent={
				<View>
					<Text style={utilStyles.emptyComponentText}>No songs found!</Text>

					<FastImage
						source={{ uri: unknownTrackImageUri, priority: FastImage.priority.normal }}
						style={utilStyles.emptyContentImage}
					/>
				</View>
			}
			renderItem={({ item: track }) => (
				<TracksListItem track={track} onTrackSelect={handleTrackSelect} />
			)}
			{...flatlistProps}
		/>
	)
}
