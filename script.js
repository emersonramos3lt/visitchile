window.sr = ScrollReveal ({reset: true});

sr.reveal('h1, p', {duration: 1000});


function clickMenu() {
var menu = document.getElementById('items');
if (menu.classList.contains('show')) {
menu.classList.remove('show');
} else {
menu.classList.add('show');
}
}
