import { TracksList } from '@/app/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import library from '@/assets/data/library.json'
import { ScrollView, Text, View } from 'react-native'
import { useMemo } from 'react'
import { useNavigationSearch } from '@/app/hooks/useNavigationSearch'
import { useFavorites } from '@/store/library'
import { trackTitleFilter } from '@/helpers/filter'
import { generateTracksListId } from '@/helpers/miscellanious'

const FavoritesScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in Songs',
		},
	})

	const favoritesTracks = useFavorites().favorites

	const filteredFavoritesTracks = useMemo(() => {
		if (!search) return favoritesTracks

		return favoritesTracks.filter(trackTitleFilter(search))
	}, [search, favoritesTracks])

	return (
		<View style={defaultStyles.container}>
			<ScrollView style={{ paddingHorizontal: screenPadding.horizontal }}>
				<TracksList
					id={generateTracksListId('favorites', search)}
					tracks={filteredFavoritesTracks}
					scrollEnabled={false}
				/>
			</ScrollView>
		</View>
	)
}
export default FavoritesScreen
