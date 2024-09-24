import typescriptEslint from '@typescript-eslint/eslint-plugin';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: ['**/dist', '**/public', '**/node_modules'],
	},
	...compat.extends(
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-essential',
		'prettier',
	),
	{
		plugins: {
			'@typescript-eslint': typescriptEslint,
			vue,
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},

			ecmaVersion: 'latest',
			sourceType: 'module',

			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},

		rules: {},
	},
];
