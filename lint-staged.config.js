module.exports = {
  "**/*.{css,html,json,md,yaml,yml}": ["prettier --write"],
  "**/*.{js,ts,x}": ["prettier --write", "eslint --cache --ext '.js,.ts' --fix", "jest --bail --findRelatedTests"],
  "src/**/*": [
    // Run build without passing changed files to command: https://github.com/okonet/lint-staged/issues/174
    "bash -c 'yarn build'",
  ],
}
