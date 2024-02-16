dev:
	yarn dev

buid:
	yarn build

lint: prettier lint-eslint lint-stylelint

lint-eslint:
	yarn eslint . --ext .js,.jsx,.ts,.tsx,.vue

lint-stylelint:
	yarn stylelint "**/*.{css,vue,html}"

prettier:
	yarn prettier . --check