module.exports = {
  "**/*.{css,html,json,md,yaml,yml}": ["prettier --write"],
  "**/*.{ts}": [
    "prettier --write",
    "eslint --cache --ext '.js,.ts' --fix",
    "./node_modules/.bin/typedoc ./src/types/ol-mapbox-style.d.ts ./src/types/olext.d.ts",
  ],
}
