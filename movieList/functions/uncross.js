const { By } = require('selenium-webdriver')

const uncross = async (driver) => {
    //select the input field, put some text in it
    await driver.findElement(By.xpath('//input')).sendKeys('crossOff')
    //select the 'add' button and click it
    await driver.findElement(By.xpath('//button')).click()
    //find the first li element (the added movie)
    const movie = await driver.findElement(By.xpath('//span'))
    await movie.click()
    await movie.click()
    const checked = await driver.findElement(By.xpath('//span[@class=""]'))
    expect(checked).toBeTruthy()
}

module.exports = {
    uncross
}