import { useMemo } from 'react'
import { useNavigationSearch } from '../hooks/useNavigationSearch'
import { TracksList } from './TracksList'
import { trackTitleFilter } from '@/helpers/filter'
import { Playlist } from '@/helpers/types'
import { generateTracksListId } from '@/helpers/miscellanious'
import { StyleSheet, View, Text } from 'react-native'
import { fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import FastImage from 'react-native-fast-image'
import { QueueControls } from './QueueControls'

export const PlaylistTracksList = ({ playlist }: { playlist: Playlist }) => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in playlists',
		},
	})

	const filteredPlaylistTracks = useMemo(() => {
		return playlist.tracks.filter(trackTitleFilter(search))
	}, [playlist.tracks, search])
	return (
		<TracksList
			id={generateTracksListId(playlist.name, search)}
			scrollEnabled={false}
			ListHeaderComponentStyle={styles.playlistHeaderContainer}
			ListHeaderComponent={
				<View>
					<View style={styles.artworkImageContainer}>
						<FastImage
							source={{
								uri: playlist.artworkPreview,
								priority: FastImage.priority.normal,
							}}
							style={styles.artworkImage}
						/>
					</View>
					<Text numberOfLines={1} style={styles.playlistNameText}>
						{playlist.name}
					</Text>

					{search.length === 0 && (
						<QueueControls tracks={playlist.tracks} style={{ paddingTop: 24 }} />
					)}
				</View>
			}
			tracks={filteredPlaylistTracks}
		/>
	)
}

const styles = StyleSheet.create({
	playlistHeaderContainer: {
		flex: 1,
		marginBottom: 32,
	},
	artworkImageContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		height: 300,
	},
	artworkImage: {
		width: '85%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 12,
	},
	playlistNameText: {
		...defaultStyles.text,
		marginTop: 22,
		textAlign: 'center',
		fontSize: fontSize.lg,
		fontWeight: '800',
	},
})
