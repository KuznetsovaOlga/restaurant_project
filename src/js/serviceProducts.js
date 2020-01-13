class ServiceProducts {
    minusImgUrl = "url('src/img/minus.svg')";
    plusImgUrl = "url('src/img/plus.svg')";
    constructor(productContainerSelector, modalContainer, productsCatalog) {
        this.container = document.querySelector(productContainerSelector);
        this.productsCatalog = productsCatalog;
        this.modalContainer = document.querySelector(modalContainer);
		this.create();
	}

    create() {

        for(let i = 0; i < this.productsCatalog.length; i++) { 

            const item = serviceCreateElement.getElement({ 
                tagName: 'li',
                dataPriceAttributeName: 'data-price',
                dataIdAttributeName: 'data-id',
                dataPrice:this.productsCatalog[i].price,
                dataId:this.productsCatalog[i].id,
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

                //  <div class="modal-content">

        //     <div class="popup-content">
        //         <button class="popup-close" type="button">Закрыть</button>

        //         <h2 class="modal-title">Стейк из говядины <span class="opacity-text">250 г</span></h2>

        //         <nav class="popup-wrapper-description">

        //             <p class="opacity-text">Описание</p>
        //             <p class="modal-text">Стейк из поясничной части мраморной говядины. Рекомендуемая степень
        //                 прожарки medium</p>
        //             <p class="opacity-text">Состав</p>
        //             <p class="modal-text">Микс салатов, лосось, соус терияки, соус Унаги</p>
        //             <p class="opacity-text">Пищевая ценность</p>

        //             <table class="modal__table-nutrients">
        //                 <tr class="modal__table-numbers">
        //                     <td>650</td>
        //                     <td>34</td>
        //                     <td>60</td>
        //                     <td>12</td>
        //                 </tr>
        //                 <tr class="opacity-text">
        //                     <th>ккал</th>
        //                     <th>белки</th>
        //                     <th>жиры</th>
        //                     <th>углеводы</th>
        //                 </tr>
        //             </table>

        //         </nav>
        //     </div>

        //     <div class="modal-gallery">
        //         <p class="modal-img"><img src="src/img/shawarma-1.png" alt="Шаверма" class="gallery_modal-img"></p>
        //     </div>

        // </div>
        

        const modalContent = serviceCreateElement.getElement({
            tagName: 'div',
            classNames: 'modal-content',
        });
        const popupContent = serviceCreateElement.getElement({
            tagName: 'div',
            classNames: 'popup-content',
        });
        const buttonPopupClose = serviceCreateElement.getElement({
            tagName: 'button',
            classNames: 'popup-close',
            textContent: 'Закрыть',
        });
        const modalTitle = serviceCreateElement.getElement({
            tagName: 'h2',
            classNames: 'modal-title',
        });
        const modalOpacityText = serviceCreateElement.getElement({
            tagName: 'span',
            classNames: 'opacity-text',
            textContent:this.productsCatalog.weight + ' г',
        });
        const popupWrapper = serviceCreateElement.getElement({
            tagName: 'nav',
            classNames: 'popup-wrapper-description',
        });
        const modalOpacityTextDescription = serviceCreateElement.getElement({
            tagName: 'p',
            classNames: 'opacity-text',
            textContent: 'Описание',
        });
        const modalText = serviceCreateElement.getElement({
            tagName: 'p',
            classNames: 'modal-text',
            // textContent: 'Стейк из поясничной части мраморной говядины. Рекомендуемая степень прожарки medium',
        });
        const modalOpacityTextContent = serviceCreateElement.getElement({
            tagName: 'p',
            classNames: 'opacity-text',
            textContent: 'Состав',
        });
        const modalTextContent = serviceCreateElement.getElement({
            tagName: 'p',
            classNames: 'modal-text-composition',
            textContent: 'Микс салатов, лосось, соус терияки, соус Унаги',
        });
        const modalOpacityTextCalory = serviceCreateElement.getElement({
            tagName: 'p',
            classNames: 'opacity-text',
            textContent: 'Пищевая ценность',
        });
        const modalTable = serviceCreateElement.getElement({
            tagName: 'table',
            classNames: 'modal__table-nutrients',
        });
        const modalTableTr = serviceCreateElement.getElement({
            tagName: 'tr',
            classNames: 'modal__table-numbers',
        });
        const modalTableTdOne = serviceCreateElement.getElement({
            tagName: 'td',
            // textContent: '650',
            classNames: 'modalTableTdOne',
        });
        const modalTableTdTwo = serviceCreateElement.getElement({
            tagName: 'td',
            // textContent: '34',
            classNames: 'modalTableTdTwo',
        });
        const modalTableTdThree = serviceCreateElement.getElement({
            tagName: 'td',
            // textContent: '60',
            classNames: 'modalTableTdThree',
        });
        const modalTableTdFour = serviceCreateElement.getElement({
            tagName: 'td',
            // textContent: '12',
            classNames: 'modalTableTdFour',
        });
        const modalTableTrOpacitty = serviceCreateElement.getElement({
            tagName: 'tr',
            classNames: 'opacity-text',
        });
        const modalTableThOne = serviceCreateElement.getElement({
            tagName: 'th',
            textContent: 'ккал',
        });
        const modalTableThTwo = serviceCreateElement.getElement({
            tagName: 'th',
            textContent: 'белки',
        });
        const modalTableThThree = serviceCreateElement.getElement({
            tagName: 'th',
            textContent: 'жиры',
        });
        const modalTableThFour = serviceCreateElement.getElement({
            tagName: 'th',
            textContent: 'углеводы',
        });
        const modalGallery = serviceCreateElement.getElement({
            tagName: 'div',
            classNames: 'modal-gallery',
        });
        const modalImg = serviceCreateElement.getElement({
            tagName: 'p',
            classNames: 'modal-img',
        });
        const galleryModalImg = serviceCreateElement.getElement({
            tagName: 'div',
            classNames: 'gallery_modal-img',
        });

        this.modalContainer.appendChild(modalContent);
        modalContent.appendChild(popupContent);
        popupContent.appendChild(buttonPopupClose);
        popupContent.appendChild(modalTitle);
        modalTitle.appendChild(modalOpacityText);
        popupContent.appendChild(popupWrapper);
        popupWrapper.appendChild(modalOpacityTextDescription);
        popupWrapper.appendChild(modalText);
        popupWrapper.appendChild(modalOpacityTextContent);
        popupWrapper.appendChild(modalTextContent);
        popupWrapper.appendChild(modalOpacityTextCalory);
        modalOpacityTextCalory.appendChild(modalTable);
        modalTable.appendChild(modalTableTr);
        modalTableTr.appendChild(modalTableTdOne);
        modalTableTr.appendChild(modalTableTdTwo);
        modalTableTr.appendChild(modalTableTdThree);
        modalTableTr.appendChild(modalTableTdFour);
        modalTable.appendChild(modalTableTrOpacitty);
        modalTableTrOpacitty.appendChild(modalTableThOne);
        modalTableTrOpacitty.appendChild(modalTableThTwo);
        modalTableTrOpacitty.appendChild(modalTableThThree);
        modalTableTrOpacitty.appendChild(modalTableThFour);
        popupContent.appendChild(modalGallery);
        modalGallery.appendChild(modalImg);
        modalImg.appendChild(galleryModalImg);
        

    }

    

    action() {
        //
    }
}

const serviceProducts = new ServiceProducts('.variants-list', '.modal', productsCatalog);

