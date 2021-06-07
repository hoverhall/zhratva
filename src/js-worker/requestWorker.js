import layoutTemplate from './layoutTemplates.js';

function postReplaceDOM (response, dom) {
    response.items.map(item => {
        let button = dom.querySelector(`#id${item.id}`)
        button.onclick = function () {
            let id = this.getAttribute("id")
            dom.cookie += id
            let ordersCount = dom.cookie.replace("order_list=id").split("id").length
            dom.querySelector(".indicator").innerText = ordersCount
        }
    })
}

function replaceDOM(dom, preparedDOM, response) {
    dom.querySelector("main").innerHTML = ""
    dom.querySelector("main").innerHTML = preparedDOM.innerHTML

    postReplaceDOM(response, dom)
}

function prepareDOM(response, dom, query) {
    let current_page_name = dom.createElement("div")
    current_page_name.classList.add("page-name")
    current_page_name.innerText = response.page_name
    
    let dishes = document.createElement("div")
    dishes.classList.add("dishes")

    response.items.map(item => {
        dishes.innerHTML += 
        `<div class="dish">
            <div class="dish-image"><img src="${item.imgURL}" alt="${item.name}"></div>
            <div class="dish-name">${item.name}</div>
            <div class="description">${item.desc}</div>
            <div class="value">${item.veight}</div>
            <div class="price-n-buy">
                <span class="price">${item.price} грн</span>
                <button class="buy" id="id${item.id}">У кошик</button>
            </div>
        </div>`
    })

    
    let container = document.createElement("div")
    container.appendChild(current_page_name)
    container.appendChild(dishes)
    
    replaceDOM(dom, container, response)
}


export default (request, dom, conn, query) => {
    let main = dom.querySelector("main")
    main.innerHTML = layoutTemplate.preloader_template

    function requestFunction(request) {
        setTimeout(() => {
            conn.get_data(request).then(res => {
                prepareDOM(res, dom, query)
            })
        }, 500)
    }

    return requestFunction(request)
}