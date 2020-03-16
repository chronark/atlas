module.exports = {
  "**/*.{css,html,json,md,yaml,yml}": ["prettier --write"],
  "**/*.{js,ts,x}": ["prettier --write", "eslint --cache --ext '.js,.ts' --fix", "jest --bail --findRelatedTests"],
}
