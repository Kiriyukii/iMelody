import { Playlist } from '@/helpers/types'
import { FlatListProps, Text, View } from 'react-native'
import { useNavigationSearch } from '../hooks/useNavigationSearch'
import { useMemo } from 'react'
import { playlistNameFilter } from '@/helpers/filter'
import { FlatList } from 'react-native-gesture-handler'
import { utilStyles } from '@/styles'
import FastImage from 'react-native-fast-image'
import { unknownArtistImageUri } from '@/constants/images'
import { PlaylistListItem } from './PlaylistListItem'

type PlaylistsListProps = {
	playlists: Playlist[]
	onPlaylistPress: (playlist: Playlist) => void
} & Partial<FlatListProps<Playlist>>

const ItemDivider = () => (
	<View style={{ ...utilStyles.itemSeparator, marginLeft: 80, marginVertical: 12 }} />
)

export const PlaylistsList = ({
	playlists,
	onPlaylistPress: handlePlaylistPress,
	...flatListProps
}: PlaylistsListProps) => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in playlist',
		},
	})

	const filteredPlaylist = useMemo(() => {
		return playlists.filter(playlistNameFilter(search))
	}, [playlists, search])

	return (
		<FlatList
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			ListEmptyComponent={
				<View>
					<Text style={utilStyles.emptyComponentText}>No playlist found!</Text>
					<FastImage
						source={{
							uri: unknownArtistImageUri,
							priority: FastImage.priority.normal,
						}}
						style={utilStyles.emptyContentImage}
					/>
				</View>
			}
			data={filteredPlaylist}
			renderItem={({ item: playlist }) => (
				<PlaylistListItem playlist={playlist} onPress={() => handlePlaylistPress(playlist)} />
			)}
			{...flatListProps}
		/>
	)
}
