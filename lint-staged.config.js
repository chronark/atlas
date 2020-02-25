module.exports = {
  "**/*.{css,gql,graphql,html,json,less,md,mdx,scss,vue,yaml,yml}": ["prettier --write"],
  "**/*.{js,jsx,ts,tsx}": [
    "prettier --write",
    "eslint --cache --ext '.js,.jsx,.ts,.tsx' --fix",
    "jest --bail --findRelatedTests",
  ],
  "src/**/*": [
    // Run build without passing changed files to command: https://github.com/okonet/lint-staged/issues/174
    "bash -c 'yarn build'",
  ],
}
