import { unknownTrackImageUri } from '@/constants/images'
import { colors, fontSize, screenPadding } from '@/constants/tokens'
import { defaultStyles, utilStyles } from '@/styles'
import { useRouter } from 'expo-router'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useActiveTrack } from 'react-native-track-player'
import { MovingText } from '@/app/components/MovingText'
import { FontAwesome } from '@expo/vector-icons'
import { PlayerControls } from '@/app/components/PlayerControls'
import { PlayerProgressBar } from '@/app/components/PlayerProgressBar'
import { PlayerVolumeBar } from '@/app/components/PlayerVolumeBar'
import { PlayerRepeatToggle } from '@/app/components/PlayerRepeatToggle'
import { usePlayerBackground } from '@/app/hooks/usePlayerBackground'
import { LinearGradient } from 'expo-linear-gradient'
import { useTrackPlayerFavorite } from '@/app/hooks/useTrackPlayerFavorite'

const PlayerScreen = () => {
	const activeTrack = useActiveTrack()
	//const { imagesColors } = usePlayerBackground(activeTrack?.artwork ?? unknownTrackImageUri)

	const { top, bottom } = useSafeAreaInsets()
	const { isFavorite, toggleFavorite } = useTrackPlayerFavorite()

	if (!activeTrack) {
		return (
			<View style={[defaultStyles.container, { justifyContent: 'center' }]}>
				<ActivityIndicator color={colors.icon} />
			</View>
		)
	}
	return (
		<LinearGradient style={{ flex: 1 }} colors={['#EE5A24', colors.primary, 'transparent']}>
			<View style={styles.overlayContainer}>
				<DismissPlayerSymbol />
				<View style={{ flex: 1, marginTop: top + 70, marginBottom: bottom }}>
					<View style={styles.artworkImageContainer}>
						<FastImage
							source={{
								uri: activeTrack.artwork ?? unknownTrackImageUri,
								priority: FastImage.priority.high,
							}}
							resizeMode="cover"
							style={styles.artworkImage}
						/>
					</View>
					<View style={{ flex: 1 }}>
						<View style={{ marginTop: 'auto' }}>
							<View style={{ height: 60 }}>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'center',
									}}
								>
									<View style={styles.trackTitleContainer}>
										<MovingText
											text={activeTrack.title ?? ''}
											animationThreshold={30}
											style={styles.trackTitleText}
										/>
									</View>
									<FontAwesome
										name={isFavorite ? 'heart' : 'heart-o'}
										size={20}
										color={isFavorite ? '#fc3c44' : colors.icon}
										style={{ marginHorizontal: 14 }}
										onPress={toggleFavorite}
									/>
								</View>
								{activeTrack.artist && (
									<Text numberOfLines={1} style={[styles.trackArtistText, { marginTop: 6 }]}>
										{activeTrack.artist}
									</Text>
								)}
							</View>
							<PlayerProgressBar style={{ marginTop: 32 }} />
							<PlayerControls style={{ marginTop: 40 }} />
						</View>
						<PlayerVolumeBar style={{ marginTop: 'auto', marginBottom: 30 }} />
						<View style={utilStyles.centeredRow}>
							<PlayerRepeatToggle size={30} style={{ marginBottom: 16 }} />
						</View>
					</View>
				</View>
			</View>
		</LinearGradient>
	)
}
const DismissPlayerSymbol = () => {
	const { top } = useSafeAreaInsets()
	const router = useRouter()

	const handlePress = () => {
		router.dismiss(1)
	}

	return (
		<View
			style={{
				position: 'absolute',
				top: top + 8,
				left: 0,
				right: 0,
				flexDirection: 'row',
				justifyContent: 'center',
			}}
		>
			<TouchableOpacity onPress={handlePress}>
				<View
					accessible={false}
					style={{
						width: 50,
						height: 8,
						borderRadius: 9,
						backgroundColor: '#fff',
						opacity: 0.7,
					}}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	overlayContainer: {
		...defaultStyles.container,
		paddingHorizontal: screenPadding.horizontal,
		backgroundColor: 'rgba(0,0,0,0,5)',
	},
	artworkImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 12,
	},
	artworkImageContainer: {
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.44,
		shadowRadius: 12.0,
		flexDirection: 'row',
		justifyContent: 'center',
		height: '45%',
	},
	trackTitleContainer: {
		flex: 1,
		overflow: 'hidden',
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: 22,
		fontWeight: '700',
	},
	trackArtistText: {
		...defaultStyles.text,
		fontSize: fontSize.base,
		opacity: 0.8,
		maxWidth: '90%',
	},
})

export default PlayerScreen
