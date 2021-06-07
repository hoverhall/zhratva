export default (dom, conn, elem_id) => {
    console.log("hello")
    conn.get_data("addons").then(res => {
        console.log(res)
    })

    document.querySelector("main").innerHTML = `
    `
}