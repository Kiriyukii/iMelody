import { TracksList } from '@/app/components/TracksList'
import { useNavigationSearch } from '@/app/hooks/useNavigationSearch'
import { screenPadding } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { ScrollView, Text, View } from 'react-native'
import { useMemo } from 'react'
import { trackTitleFilter } from '@/helpers/filter'
import { useTracks } from '@/store/library'
import { generateTracksListId } from '@/helpers/miscellanious'

const SongsScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in Songs',
		},
	})

	const tracks = useTracks()

	const filteredTracks = useMemo(() => {
		if (!search) return tracks

		return tracks.filter(trackTitleFilter(search))
	}, [search, tracks])

	return (
		<View style={defaultStyles.container}>
			<ScrollView style={{ paddingHorizontal: screenPadding.horizontal }}>
				<TracksList
					id={generateTracksListId('songs', search)}
					tracks={filteredTracks}
					scrollEnabled={false}
				/>
			</ScrollView>
		</View>
	)
}
export default SongsScreen
