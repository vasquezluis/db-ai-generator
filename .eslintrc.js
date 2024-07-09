module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard-with-typescript',
		'plugin:react/recommended',
		'plugin:@next/next/recommended',
		'eslint-config-prettier',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	ignorePatterns: [
		'.eslintrc.js',
		'next.config.mjs',
		'next-env.d.ts',
		'postcss.config.mjs',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'react/react-in-jsx-scope': 'off',
	},
}
