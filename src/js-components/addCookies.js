export default (dom, conn, elem_id, func) => {
    if (typeof func !== "undefined") func(elem_id)
}