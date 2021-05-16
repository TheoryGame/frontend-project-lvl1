install: # setup needful dependencies on first launch
	npm ci
brain-games: # reading and launch the file
	node bin/brain-games.js
brain-even: # reading and launch the file
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
