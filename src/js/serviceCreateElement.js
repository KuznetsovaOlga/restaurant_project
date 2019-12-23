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

        if ('data' in options && 'dataAttributeName' in options) {
            element.setAttribute(options.dataAttributeName, options.data); 
        }
        
        return element; 
    }
}

const serviceCreateElement = new ServiceCreateElement();


