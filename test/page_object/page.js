class Page {
    constructor(){}

    get title(){ return browser.getTitle() }
    
    
    open(path) {
        browser.url(path)
    }
    
    
}
module.export = new Page()
