import { useNavigationSearch } from '@/app/hooks/useNavigationSearch'
import { unknownArtistImageUri } from '@/constants/images'
import { screenPadding } from '@/constants/tokens'
import { artistNameFilter } from '@/helpers/filter'
import { useArtists } from '@/store/library'
import { defaultStyles, utilStyles } from '@/styles'
import { Link } from 'expo-router'
import { useMemo } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ItemSeparatorComponent = () => {
	return <View style={[utilStyles.itemSeparator, { marginLeft: 50, marginVertical: 12 }]} />
}

const ArtistsLayout = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in Artists',
		},
	})
	const artists = useArtists()

	const filteredArtists = useMemo(() => {
		if (!search) return artists

		return artists.filter(artistNameFilter(search))
	}, [])

	return (
		<View style={defaultStyles.container}>
			<ScrollView style={{ paddingHorizontal: screenPadding.horizontal }}>
				<FlatList
					contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
					scrollEnabled={false}
					ItemSeparatorComponent={ItemSeparatorComponent}
					ListFooterComponent={ItemSeparatorComponent}
					ListEmptyComponent={
						<View>
							<Text>No artists found!</Text>
							<FastImage
								source={{ uri: unknownArtistImageUri, priority: FastImage.priority.normal }}
								style={utilStyles.emptyContentImage}
							/>
						</View>
					}
					data={filteredArtists}
					renderItem={({ item: artist }) => {
						return (
							<Link href={`/artists/${artist.name}`} asChild>
								<TouchableOpacity activeOpacity={0.8}>
									<View style={styles.artistItemContainer}>
										<View>
											<FastImage
												source={{
													uri: unknownArtistImageUri,
													priority: FastImage.priority.normal,
												}}
												style={styles.artistImage}
											/>
										</View>
										<View style={{ width: '100%' }}>
											<Text numberOfLines={1} style={styles.artistNameText}>
												{artist.name}
											</Text>
										</View>
									</View>
								</TouchableOpacity>
							</Link>
						)
					}}
				/>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	artistItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
	},
	artistImage: {
		borderRadius: 32,
		width: 40,
		height: 40,
	},
	artistNameText: {
		...defaultStyles.text,
		fontSize: 17,
		maxWidth: '80%',
	},
})

export default ArtistsLayout
