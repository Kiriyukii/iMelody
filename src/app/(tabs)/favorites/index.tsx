import { TracksList } from '@/app/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import library from '@/assets/data/library.json'
import { ScrollView, Text, View } from 'react-native'
import { useMemo } from 'react'
import { useNavigationSearch } from '@/app/hooks/useNavigationSearch'

const FavoritesScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in Songs',
		},
	})
	const favoritesTracks = useMemo(() => {
		return library.filter((track) => track.rating === 1)
	}, [])
	return (
		<View style={defaultStyles.container}>
			<ScrollView style={{ paddingHorizontal: screenPadding.horizontal }}>
				<TracksList tracks={favoritesTracks} scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}
export default FavoritesScreen
