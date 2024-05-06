import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

export const colors = {
	primary: '#f5801f',
	background: '#000',
	text: '#fff',
	textMuted: '#9ca3af',
	icon: '#fff',
	maximumTrackTintColor: 'rgba(255,255,255,0.4)',
	minimumTrackTintColor: 'rgba(255,255,255,0.6)',
}

export const theme = {
	white: '#fff',
	black: '#000',
	grayBG: '#e5e5e5',
	neutral: (opacity) => 'rgba(10, 10,10, ${opacity})',
}

export const fontSize = {
	xs: 12,
	sm: 16,
	base: 20,
	lg: 24,
}

export const screenPadding = {
	horizontal: 24,
}