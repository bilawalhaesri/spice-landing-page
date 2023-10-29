function navbarScroll(){
    if(window.scrollY>100){
        $('header').addClass('navbar-scroll');
        $('header').removeClass('navbar');
        $('.logo').css('color','#F9F8F2');
        $('.hamburger a').css('color','#F9F8F2');
        $('.navbar-menu ul li a').css('color','#F9F8F2');
        $('.navbar-side ul li a').css('color','#F9F8F2');
    }
    else{
        $('header').removeClass('navbar-scroll');
        $('header').addClass('navbar');
        $('.logo').css('color','#D68861');
        $('.hamburger a').css('color','#D68861');
        $('.navbar-menu ul li a').css('color','#D68861');
        $('.navbar-side ul li a').css('color','#D68861');
    }
}

$(document).on('scroll',function(){
    navbarScroll();
});