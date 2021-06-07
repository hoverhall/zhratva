import * as MP from './js-worker/moduleProvider.js'

const connect = new MP.Connect();

window.onclick = (event) => {
    event.preventDefault()
}

window.onload = (event) => {
    if (!document.cookie) {
        document.cookie = "order_list="
    } else {
        let ordersCount = document.cookie.replace("order_list=id").split("id").length
        document.querySelector(".indicator").innerText = ordersCount
    }
    let curURL = window.location.href.replace("http://localhost/", "")
    MP.requestWorker(curURL, document, connect, null)
}

let queryObj = [
    {var: 0 },
    {var: 0 },
    {var: 0 }
]

let selectMenuItem = (elem_id) => {
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

menuItems.map(listItem => {
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

document.querySelector(".cart").onclick = () => {
    console.log("click")
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

document.querySelector(".orders .close").onclick = () => {
    console.log("click")
    document.querySelector(".orders").classList.add("orders-unvisible")
}

document.querySelector(".submit").onclick = () => {
    let name = document.querySelector(".name input").value;
    let city = document.querySelector(".credits .city input").value
    let adress = document.querySelector(".credits .adress input").value
    let phone = document.querySelector(".phone input").value

    if (name && city && adress && phone) {
        let data = JSON.stringify({
            name: name,
            city: city,
            adress: adress,
            phone: phone,
            order_list: document.cookie.replace("order_list=id", "").split("id")
        })
        connect.post_data("orders", data)

        document.cookie = "order_list="
        let ordersCount = document.cookie.replace("order_list=id").split("id").length
        document.querySelector(".indicator").innerText = ordersCount

        setTimeout(() => {
            document.querySelector(".orders").classList.add("orders-unvisible")
        }, 300)
    } else {
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