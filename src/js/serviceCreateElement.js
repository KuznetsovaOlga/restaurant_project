class ServiceCreateElement {
    getElement(options) { 
        const element = document.createElement(options.tagName); 
        element.setAttribute('class', options.classNames); 

        if ('textContent' in options) {
            element.textContent = options.textContent; 
        }

        if ('backgroundImage' in options) {
            element.style.backgroundImage = options.backgroundImage;
        }

        if ('dataPrice' in options && 'dataPriceAttributeName' in options) {
            element.setAttribute(options.dataPriceAttributeName, options.dataPrice); 
        }

        if ('dataId' in options && 'dataIdAttributeName' in options) {
            element.setAttribute(options.dataIdAttributeName, options.dataId); 
        }
        
        return element; 
    }
}

const serviceCreateElement = new ServiceCreateElement();


