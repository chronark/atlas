/* eslint-disable no-console */
const createTestCafe = require("testcafe")

let testcafe = null

let browsers = process.env.CI ? ["chrome:headless", "firefox:headless"] : ["all"]
let concurrency = 1
let stopOnFirstfail = false
if (process.env.IE_ONLY) {
  browsers = ["ie"]
  concurrency = 2
  stopOnFirstfail = true
}

createTestCafe("localhost", 1337, 1338)
  .then((tc) => {
    testcafe = tc
    const runner = testcafe.createRunner()

    return runner
      .startApp("yarn serve", 5000)
      .browsers(browsers)
      .concurrency(concurrency)
      .src("__tests__/e2e/*.test.ts")
      .tsConfigPath("tsconfig.testcafe.json")
      .run({
        stopOnFirstfail: stopOnFirstfail,
      })
  })
  .then((failedCount) => {
    console.log("Tests failed: " + failedCount)
    testcafe.close()
  })
  .catch((error) => {
    console.error(error)
    testcafe.close()
  })
