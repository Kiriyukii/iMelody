import { FlatList, FlatListProps, View } from 'react-native'
import library from '@/assets/data/library.json'
import { TracksListItem } from './TrackListItems'
import { utilStyles } from '@/styles'
import { Track } from 'react-native-track-player'

export type TracksListProps = Partial<FlatListProps<Track>> & {
	tracks: Track[]
}
const ItemDivider = () => (
	<View style={{ ...utilStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)
export const TracksList = ({ tracks, ...flatlistProps }: TracksListProps) => {
	const handleTrackSelect = (track: Track) => {
		console.log(track)
	}
	return (
		<FlatList
			data={tracks}
			ItemSeparatorComponent={ItemDivider}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ListFooterComponent={ItemDivider}
			renderItem={({ item: track }) => (
				<TracksListItem track={track} onTrackSelect={handleTrackSelect} />
			)}
			{...flatlistProps}
		/>
	)
}
