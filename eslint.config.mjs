import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'

export default [
	{
		ignores: [
			'**/node_modules/**',
			'**/.expo/**',
			'**/.next/**',
			'**/__generated__/**',
			'**/build/**',
			'/react-native-lab/react-native/**',
			'/docs/react-native-website/**',
			'**/android/**',
			'**/assets/**',
			'**/bin/**',
			'**/fastlane/**',
			'**/ios/**',
			'**/kotlin/providers/**',
			'**/vendored/**',
			'/docs/public/static/**',
		],
	},
	{ files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	...tseslint.configs.recommended,
	pluginReactConfig,
]
