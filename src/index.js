import * as MP from './js-worker/moduleProvider.js'

const connect = new MP.Connect();

window.onclick = (event) => {
    event.preventDefault()
}

window.onload = (event) => { // When page was loaded 
    if (!document.cookie) { // if cookie is empty or not initialized
        document.cookie = "order_list="; 
    } else { // if cookie is not empty
        let ordersCount =  document.cookie.replace("order_list=id").split("id").length; // get the length of cookie
        let temp = document.cookie.replace("order_list=id").split("id") // split array text array of orders and make in array object
        document.querySelector(".indicator").innerText = temp == "order_list=" ? 0 : ordersCount // replace orders count on cart indicator
    }
    let curURL = window.location.href.replace("http://localhost/", "")
    console.log(curURL)
    setTimeout(() => {
        curURL == "" ? MP.requestWorker("all_dishes", document, connect, null) : MP.requestWorker(curURL, document, connect, null) // make request and replace DOM at first page load 
    })
}

let queryObj = [
    {var: 0 },
    {var: 0 },
    {var: 0 }
]

let selectMenuItem = (elem_id) => { // make menu item seleted or not selected
    queryObj.map(item => {
        if (item.var) { 
            Array.from(document.getElementsByClassName(item.var.className.slice(9))).map(item => item.classList.remove("selected"))
        }
        
        item.var = elem_id
        Array.from(document.getElementsByClassName(item.var.className.slice(9))).map(item => item.classList.add("selected"))
    })
}

let menuItems = [
    {request: "first_dishes", query: ".fd"},
    {request: "main_dishes", query: ".md"},
    {request: "addon_dishes", query: ".ad"},
    {request: "salates", query: ".sa"},
    {request: "bakeries", query: ".ba"},
    {request: "cooks", query: ".co"},
    {request: "drinks", query: ".dr"},
    {request: "all_dishes", query: ".al"},
]

menuItems.map(listItem => { // create an events onclick to make manu item selected and make request to the server and load prepeared DOM
    console.log(Array.from(document.querySelectorAll(listItem.query)))
    Array.from(document.querySelectorAll(listItem.query)).map(item => {
        item.querySelector("a").setAttribute("href", listItem.request)
        item.onclick = () => {
            window.history.pushState("object or string", "Title", `/${listItem.request}`);
            selectMenuItem(item)
            MP.requestWorker(listItem.request, document, connect, listItem.query)
            
        }
    })
})

document.querySelector(".cart").onclick = () => { // open cart window and calculate order summ
    document.querySelector(".orders").classList.remove("orders-unvisible")
    function summ() {
        let summ = 0
        connect.response_data.items.map(item => {
            for (let i of document.cookie.replace("order_list=id", "").split("id")) {
                if (parseInt(i) == item.id) {
                    summ += item.price
                }
            }
        })
        return summ;
    }

    console.log(connect.response_data.items)
    document.querySelector(".summary .summ").innerText = summ()
}

document.querySelector(".orders .close").onclick = () => { // close cart window
    console.log("click")
    document.querySelector(".orders").classList.add("orders-unvisible")
}

document.querySelector(".submit").onclick = () => { // when submit button was pressed
    let name = document.querySelector(".name input").value;
    let city = document.querySelector(".credits .city input").value
    let adress = document.querySelector(".credits .adress input").value
    let phone = document.querySelector(".phone input").value

    if (name && city && adress && phone) { // if input areas are not empty
        let data = JSON.stringify({
            name: name,
            city: city,
            adress: adress,
            phone: phone,
            order_list: document.cookie.replace("order_list=id", "").split("id")
        })
        connect.post_data("orders", data) // send data from input areas and cookie to the server

        document.cookie = "order_list=" // clean cookie
        let ordersCount =  document.cookie.replace("order_list=id").split("id").length
        let temp = document.cookie.replace("order_list=id").split("id")
        document.querySelector(".indicator").innerText = temp == "order_list=" ? 0 : ordersCount // make cart indicator equals 0

        setTimeout(() => {
            document.querySelector(".orders").classList.add("orders-unvisible") // close cart window
        }, 300)
    } else { // warning if input areas are empty
            document.querySelector(".order-area").classList.add("warning")
            setTimeout(() => {
                document.querySelector(".order-area").classList.remove("warning")
                setTimeout(() => {
                    document.querySelector(".order-area").classList.add("warning")
                    setTimeout(() => {
                        document.querySelector(".order-area").classList.remove("warning")
                        setTimeout(() => {
                            document.querySelector(".order-area").classList.add("warning")
                            setTimeout(() => {
                                document.querySelector(".order-area").classList.remove("warning")
                            }, 300);
                        }, 300);
                    }, 300);
                }, 300);
            }, 300);
    }
}