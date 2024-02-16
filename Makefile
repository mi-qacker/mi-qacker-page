dev:
	yarn dev

buid:
	yarn build

lint: prettier lint-eslint

lint-eslint:
	yarn eslint . --ext .js,.jsx,.ts,.tsx,.vue

prettier:
	yarn prettier . --check