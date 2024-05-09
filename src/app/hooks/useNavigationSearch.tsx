import { SearchBarProps } from 'react-native-screens'
import { colors } from '@/constants/tokens'
import { useLayoutEffect, useState } from 'react'
import { useNavigation } from 'expo-router'

const defaultSearchOptions: SearchBarProps = {
	textColor: '#fff',
	barTintColor: '#707371',
}

export const useNavigationSearch = ({
	searchBarOptions,
}: {
	searchBarOptions?: SearchBarProps
}) => {
	const [search, setSearch] = useState('')

	const navigation = useNavigation()

	const handleOnChangeText: SearchBarProps['onChangeText'] = ({ nativeEvent: { text } }) => {
		setSearch(text)
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				placeholderTextColor: 'white',
				headerIconColor: colors.icon,
				...defaultSearchOptions,
				...searchBarOptions,
				onChangeText: handleOnChangeText,
			},
		})
	}, [navigation, searchBarOptions])
	return search
}
