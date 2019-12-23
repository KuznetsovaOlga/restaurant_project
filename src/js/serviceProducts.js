class ServiceProducts {
    minusImgUrl = "url('src/img/minus.svg')";
    plusImgUrl = "url('src/img/plus.svg')";
    constructor(productContainerSelector,productsCatalog) {
        this.container = document.querySelector(productContainerSelector);
		this.productsCatalog = productsCatalog;
		this.create();
	}

    create() {
        for(let i = 0; i < this.productsCatalog.length; i++) { 

            const item = serviceCreateElement.getElement({ 
                tagName: 'li',
                dataAttributeName: 'data-price',
                data:this.productsCatalog[i].price,
                classNames: 'variants-list-item',
            });
            const count = serviceCreateElement.getElement({ 
                tagName: 'div',
                classNames: 'counter',
            });
            const decreaseButton = serviceCreateElement.getElement({ 
                tagName: 'button',
                classNames: 'counter-button counter-button__minus',
            });
            const imgMinus = serviceCreateElement.getElement({ 
                tagName: 'div',
                classNames: 'img_counter',
                backgroundImage: this.minusImgUrl,
            });
            const number = serviceCreateElement.getElement({ 
                tagName: 'div',
                classNames: 'counter-number',
            });
            const increaseButton  = serviceCreateElement.getElement({ 
                tagName: 'button',
                classNames:'counter-button counter-button__plus',
            });
            const imgPlus = serviceCreateElement.getElement({ 
                tagName: 'div',
                classNames: 'img_counter',
                backgroundImage: this.plusImgUrl,
            });
            const img = serviceCreateElement.getElement({ 
                tagName: 'div',
                classNames: 'img_dish',
                backgroundImage:`url(${this.productsCatalog[i].img})`,
            });
            const listItemHeader = serviceCreateElement.getElement({ 
                tagName: 'div',
                classNames: 'variants-list-item__header',
            });
            const itemHeaderName = serviceCreateElement.getElement({
                tagName: 'p',
                classNames: 'variants-list-item__header-name',
                textContent:this.productsCatalog[i].name, 
            });
            const itemHeaderWeigth = serviceCreateElement.getElement({
                tagName: 'span',
                classNames: 'variants-list-item__header-weight',
                textContent:this.productsCatalog[i].weight + ' г',
            });
            const itemHeaderPrice = serviceCreateElement.getElement({
                tagName: 'div',
                classNames: 'variants-list-item__header-price',
                textContent:this.productsCatalog[i].price.toLocaleString() + ' ₽', 
            });
            const itemHeaderDescription = serviceCreateElement.getElement({
                tagName: 'p',
                classNames: 'variants-list-item__header-description',
                
            });
            const descriptionOpacityText = serviceCreateElement.getElement({
                tagName: 'span',
                classNames: 'opacity-text',
                textContent:this.productsCatalog[i].description,
            });
            const popup = serviceCreateElement.getElement({
                tagName: 'a',
                classNames: 'popup',
                textContent: 'подробнее',
            });
            
        this.container.appendChild(item);
        item.appendChild(count);
        count.appendChild(decreaseButton );
        decreaseButton.appendChild(imgMinus);
        count.appendChild(number);
        count.appendChild(increaseButton );
        increaseButton.appendChild(imgPlus);
        item.appendChild(img);
        item.appendChild(listItemHeader);
        listItemHeader.appendChild(itemHeaderName);
        itemHeaderName.appendChild(itemHeaderWeigth);
        listItemHeader.appendChild(itemHeaderPrice);
        item.appendChild(itemHeaderDescription);
        itemHeaderDescription.appendChild(descriptionOpacityText);
        itemHeaderDescription.appendChild(popup);

        } 
    }

    action() {
        //
    }
}

const serviceProducts = new ServiceProducts('.variants-list', productsCatalog);

