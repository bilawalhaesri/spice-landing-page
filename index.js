function navbarScroll(){
    let navbar = document.querySelector('header');
    navbar.classList.remove('navbar');
    navbar.classList.add('navbar-scroll');
    setTimeout(function(){
        navbar.classList.add('navbar');
        navbar.classList.remove('navbar-scroll');
    },500);
}

document.addEventListener('scroll',function(){
    navbarScroll();
})