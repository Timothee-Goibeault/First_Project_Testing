
export default class Page {
    
    get title(){ return browser.title() }
    
    open(path) {
        browser.url(path)
    }
    
    
}
