import { colors } from '@/constants/tokens'
import { useEffect, useState } from 'react'
import { getColors } from 'react-native-image-colors'
import { WebImageColors } from 'react-native-image-colors/build/types'

type Colors = WebImageColors

export const usePlayerBackground = (imageUrl: string) => {
	const [imagesColors, setImageColors] = useState<Colors | null>(null)

	useEffect(() => {
		getColors(imageUrl, {
			fallback: colors.background,
			cache: true,
			key: imageUrl,
		})
			.then((colors) => setImageColors(colors as Colors))
			.catch((error) => {
				console.error('Error getting image colors:', error)
			})
	}, [imageUrl])

	return { imagesColors }
}
