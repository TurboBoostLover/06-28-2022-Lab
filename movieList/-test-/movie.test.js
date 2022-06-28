const { Builder, Capabilities } = require("selenium-webdriver")
require("chromedriver")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const  {addMovie} = require('../functions/addMovies')
const {deleteMovie} = require('../functions/deleteMovie')
const {crossOff} = require('../functions/crossOff')
const {uncross} = require('../functions/uncross')
beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})
afterAll(async () => {
    await driver.quit()
})

//let's pause the test at the end for 5 seconds
// afterEach(async () => {
//     await driver.sleep(500)
// })

test('Test add movie', async () => {
    await addMovie(driver)

})

test('Test delete', async () => {
    await deleteMovie(driver)
})

test('Test crossOff', async () => {
    await crossOff(driver)
})

test('Test uncross', async () => {
    await uncross(driver)
})