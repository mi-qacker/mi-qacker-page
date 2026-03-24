import js from '@eslint/js';
import typescriptEslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	{
		ignores: ['**/dist', '**/public', '**/node_modules'],
	},
	js.configs.recommended,
	...typescriptEslint.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	{
		files: ['**/*.{js,ts,vue}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
		rules: {
			// override/add rules settings here, such as:
			// 'vue/no-unused-vars': 'error'
		},
	},
	eslintConfigPrettier,
];
