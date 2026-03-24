dev:
	npm run dev

buid:
	npm run build

test:
	npx vitest run

lint: prettier lint-eslint lint-stylelint

lint-eslint:
	npx eslint .

lint-stylelint:
	npx stylelint "**/*.{css,vue,html}"

prettier:
	npx prettier . --check