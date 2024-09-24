RUNNER := yarn

dev:
	$(RUNNER) dev

buid:
	$(RUNNER) build

test:
	$(RUNNER) vitest run

lint: prettier lint-eslint lint-stylelint

lint-eslint:
	$(RUNNER) eslint .

lint-stylelint:
	$(RUNNER) stylelint "**/*.{css,vue,html}"

prettier:
	$(RUNNER) prettier . --check