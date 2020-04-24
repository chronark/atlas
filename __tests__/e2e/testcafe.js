/* eslint-disable no-console */
const createTestCafe = require("testcafe")

let testcafe

const defaultConfig = {
  browsers: ["all"],
  concurrency: 4,
  stopOnFirstfail: false,
}

const ciConfig = {
  browsers: ["chrome:headless", "firefox:headless"],
  concurrency: 1,
  stopOnFirstfail: true,
}

const config = process.env.CI ? ciConfig : defaultConfig
if (process.env.BROWSER) {
  config.browsers = [process.env.BROWSER]
}

createTestCafe("localhost", 1337, 1338)
  .then((tc) => {
    testcafe = tc
    const runner = testcafe.createRunner()

    return runner
      .startApp("yarn serve", 5000)
      .browsers(config.browsers)
      .concurrency(config.concurrency)
      .src("__tests__/e2e/*.test.ts")
      .tsConfigPath("tsconfig.testcafe.json")

      .run({
        disableScreenshots: true,
        stopOnFirstFail: config.stopOnFirstfail,
      })
  })
  .then((failed) => {
    console.warn(failed)
    testcafe.close()
  })
  .catch((error) => {
    console.error(error)
    testcafe.close()
    process.exit(1)
  })
