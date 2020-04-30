module.exports = {
  "**/*.{css,html,json,md,yaml,yml}": ["prettier --write"],
  "**/*.{ts}": ["prettier --write", "eslint --cache --ext '.js,.ts' --fix"],
  
}
