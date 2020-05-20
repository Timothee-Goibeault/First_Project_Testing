
module.exports class Page {
    constructor() {
        this.title = browser.title()
    }

    get title(){ return browser.title() }
    
    open(path) {
        browser.url(path)
    }
    
    
}
const Page = new Page