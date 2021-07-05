let themeSwitch = document.querySelector('.fa');
let body = document.querySelector('body');
themeSwitch.onclick = function() {
    themeSwitch.classList.toggle('active');
    body.classList.toggle('dark');
}


let menutoggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;

    header.classList.toggle('scrolling-active', windowPosition);
})

let uparrow = document.querySelector('.fa-angle-up');
uparrow.onclick = function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++) {
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}