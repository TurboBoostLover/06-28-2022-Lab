const { By } = require('selenium-webdriver')

const deleteMovie = async (driver) => {
    //select the input field, put some text in it
    await driver.findElement(By.xpath('//input')).sendKeys('test')
    //select the 'add' button and click it
    await driver.findElement(By.xpath('//button')).click()
    //find the first li element (the added movie)
    const movie = await driver.findElement(By.xpath('//span'))

    await driver.findElement(By.id('test')).click()
    expect(movie).not.toBe('test')


}

module.exports = {
    deleteMovie
}