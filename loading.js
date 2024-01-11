window.onload = function () {
    setTimeout(function () {
        document.querySelector(".loader-wrapper").style.display = "none";
        document.getElementById("menu-header, section").style.display = "block";
}, 1200)
};

function clickMenu() {
    var menu = document.getElementById('items');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
}

