module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  coverageDirectory: "coverage",
  /*
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 75,
      lines: 50,
      statements: -50,
    },
  },
*/
  roots: ["./"],
  testURL: "http://localhost",
  testPathIgnorePatterns: ["/dist/", "node_modules"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!ol).+\\.js$"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  verbose: false,
  setupFiles: ["jest-canvas-mock"],
}
