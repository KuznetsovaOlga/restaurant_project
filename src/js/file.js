// открытие модального окна

let popup = document.querySelector(".modal");
let close = document.querySelector(".popup-close");
const productListElement = document.querySelector("#product-list");

productListElement.onclick = function (evt) {
    if (evt.target.className != "popup") return;
    itemId = evt.target.parentNode.parentNode.getAttribute("data-id");
   
    let modalItem = productsCatalog.filter(function(el) {
        return (itemId === el.id);
    });
    document.querySelector(".modal-title").textContent = modalItem[0].name;
    
    document.querySelector(".gallery_modal-img").style.background = `url(${modalItem[0].imgBig}) no-repeat center`;
    document.querySelector(".modal-text-composition").textContent = modalItem[0].descriptionComposition;
    document.querySelector(".modal-text").textContent = modalItem[0].description;
    document.querySelector(".modalTableTdOne").textContent  = modalItem[0].calories;
    document.querySelector(".modalTableTdTwo").textContent  = modalItem[0].squirrels;
    document.querySelector(".modalTableTdThree").textContent  = modalItem[0].fats;
    document.querySelector(".modalTableTdFour").textContent  = modalItem[0].carbohydrates;

   
    popup.classList.add("modal-show");
    evt.preventDefault();
};

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        popup.classList.remove("modal-show");
    }
})

// ценновой фильтр (возврастание и убывание)

const priceFilterButton = document.querySelector("#price-filter"); // кнопка
const priceFilterIcon = priceFilterButton.firstElementChild; // иконка стрелки
let isAscending = true;

priceFilterButton.onclick = function () {
    priceFilterIcon.classList.toggle("filter-button__arrow--turned");
    isAscending = !isAscending;
    sortListByPrice();
};

function sortListByPrice() {
    const productList = productListElement.children;

    for (let i = 0; i < productList.length; i++) {
        for (let j = i; j < productList.length; j++) {
            if (getCompareCondition(productList[i], productList[j])) {
                replaceNode = productListElement.replaceChild(productList[j], productList[i]);
                insertAfter(replaceNode, productList[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function getCompareCondition(a, b) {
    if (isAscending) {
        return +a.getAttribute("data-price") < +b.getAttribute("data-price");
    }
    return +a.getAttribute("data-price") > +b.getAttribute("data-price");
}


// горизонтальный скролл для меню

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.dragscroll = {}));
    }
}(this, function (exports) {
    var _window = window;
    var _document = document;
    var mousemove = 'mousemove';
    var mouseup = 'mouseup';
    var mousedown = 'mousedown';
    var EventListener = 'EventListener';
    var addEventListener = 'add' + EventListener;
    var removeEventListener = 'remove' + EventListener;
    var newScrollX, newScrollY;

    var dragged = [];
    var reset = function (i, el) {
        for (i = 0; i < dragged.length;) {
            el = dragged[i++];
            el = el.container || el;
            el[removeEventListener](mousedown, el.md, 0);
            _window[removeEventListener](mouseup, el.mu, 0);
            _window[removeEventListener](mousemove, el.mm, 0);
        }

        dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
        for (i = 0; i < dragged.length;) {
            (function (el, lastClientX, lastClientY, pushed, scroller, cont) {
                (cont = el.container || el)[addEventListener](
                    mousedown,
                    cont.md = function (e) {
                        if (!el.hasAttribute('nochilddrag') ||
                            _document.elementFromPoint(
                                e.pageX, e.pageY
                            ) == cont
                        ) {
                            pushed = 1;
                            lastClientX = e.clientX;
                            lastClientY = e.clientY;

                            e.preventDefault();
                        }
                    }, 0
                );

                _window[addEventListener](
                    mouseup, cont.mu = function () { pushed = 0; }, 0
                );

                _window[addEventListener](
                    mousemove,
                    cont.mm = function (e) {
                        if (pushed) {
                            (scroller = el.scroller || el).scrollLeft -=
                                newScrollX = (- lastClientX + (lastClientX = e.clientX));
                            scroller.scrollTop -=
                                newScrollY = (- lastClientY + (lastClientY = e.clientY));
                            if (el == _document.body) {
                                (scroller = _document.documentElement).scrollLeft -= newScrollX;
                                scroller.scrollTop -= newScrollY;
                            }
                        }
                    }, 0
                );
            })(dragged[i++]);
        }
    }


    if (_document.readyState == 'complete') {
        reset();
    } else {
        _window[addEventListener]('load', reset, 0);
    }

    exports.reset = reset;
}));


// счетчик для товаров 

function addClickHandlerForCounter(counter) {
    const minus = counter.querySelector(".counter-button__minus"); 
    const number = counter.querySelector(".counter-number"); 
    const plus = counter.querySelector(".counter-button__plus"); 


    plus.addEventListener("click", function () {
        number.textContent++;
        minus.classList.add("show");
        number.classList.add("show");
    });
    minus.addEventListener("click", function () {
        number.textContent--;
        if (number.textContent < 1) {
            minus.classList.remove("show");
            number.classList.remove("show");
        }
    });
}

const counts = document.querySelectorAll(".counter");
counts.forEach(addClickHandlerForCounter);








