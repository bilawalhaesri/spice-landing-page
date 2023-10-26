function navbarScroll(){
    let navbar = document.querySelector('header');
    if (window.scrollY>100){
        navbar.classList.add('navbar-scroll');
        navbar.classList.remove('navbar');
        document.querySelector('.logo').style.color='#F9F8F2'
        document.querySelector('.hamburger a').style.color='#F9F8F2'
        for(i=0;i<document.querySelectorAll('.navbar-menu ul li a').length;i++){
            document.querySelectorAll('.navbar-menu ul li a')[i].style.color = '#F9F8F2';
        }
        for(i=0;i<document.querySelectorAll('.navbar-side ul li a').length;i++){
            document.querySelectorAll('.navbar-side ul li a')[i].style.color = '#F9F8F2';
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