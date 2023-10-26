function navbarScroll(){
    let navbar = document.querySelector('header');
    if (window.scrollY>100){
        navbar.classList.add('navbar-scroll');
        navbar.classList.remove('navbar');
        document.querySelector('.logo').style.color='#ffffff'
        document.querySelector('.hamburger a').style.color='#ffffff'
        for(i=0;i<document.querySelectorAll('.navbar-menu ul li a').length;i++){
            document.querySelectorAll('.navbar-menu ul li a')[i].style.color = '#FFFFFF';
        }
        for(i=0;i<document.querySelectorAll('.navbar-side ul li a').length;i++){
            document.querySelectorAll('.navbar-side ul li a')[i].style.color = '#FFFFFF';
        }
    }
    else{
        navbar.classList.remove('navbar-scroll');
        navbar.classList.add('navbar');
        document.querySelector('.logo').style.color='#D68861'
        document.querySelector('.hamburger a').style.color='#D68861'
        for(i=0;i<document.querySelectorAll('.navbar-menu ul li a').length;i++){
            document.querySelectorAll('.navbar-menu ul li a')[i].style.color = '#D68861';
        }
        for(i=0;i<document.querySelectorAll('.navbar-side ul li a').length;i++){
            document.querySelectorAll('.navbar-side ul li a')[i].style.color = '#D68861';
        }
    }
}

document.addEventListener('scroll',function(){
    navbarScroll();
})