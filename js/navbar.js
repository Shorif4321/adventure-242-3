window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
