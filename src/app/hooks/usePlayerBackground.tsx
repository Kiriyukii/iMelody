import { colors } from '@/constants/tokens'
import { useEffect, useState } from 'react'
import { getColors } from 'react-native-image-colors'
import { AndroidImageColors } from 'react-native-image-colors/build/types'

export const usePlayerBackground = (imageUrl: string) => {
	const [imagesColors, setImageColors] = useState<AndroidImageColors | null>(null)

	useEffect(() => {
		getColors(imageUrl, {
			fallback: colors.background,
			cache: true,
			key: imageUrl,
		}).then((colors) => setImageColors(colors as AndroidImageColors))
	}, [imageUrl])

	return { imagesColors }
}
