
document.onscroll = () => {
    let menu = document.querySelector(".main-menu")
    
    if (window.innerWidth > 1000) {
        console.log(true)
        if (window.pageYOffset  > 52) {
            menu.classList.add("sticky")
        } else if (window.pageYOffset <= 52) {
            menu.classList.remove("sticky");
        }
    }
}

document.querySelector(".cart img").onclick = function() {
    return false;
};

document.querySelector(".burger-menu").onclick = () => {
    document.querySelector(".hidden-menu-btn-block").classList.remove("hidden")
}

document.querySelector(".close").onclick = () => {
    document.querySelector(".hidden-menu-btn-block").classList.add("hidden")
}

