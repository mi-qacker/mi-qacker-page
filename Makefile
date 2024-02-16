RUNNER := yarn

dev:
	$(RUNNER) dev

buid:
	$(RUNNER) build

test:
	$(RUNNER) vitest run

lint: prettier lint-eslint lint-stylelint

lint-eslint:
	$(RUNNER) eslint . --ext .js,.jsx,.ts,.tsx,.vue

lint-stylelint:
	$(RUNNER) stylelint "**/*.{css,vue,html}"

prettier:
	$(RUNNER) prettier . --check