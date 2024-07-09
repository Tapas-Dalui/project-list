function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('div ul li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('div ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

var $galleryContainer = $('.pro-container').isotope({
  itemSelector: '.pro',
    layoutMode: 'fitRows'
})

$('.project-btn .button').on('click', function(){
  $('.project-btn .button').removeClass('active');
  $(this).addClass('active');

  var value = $(this).attr('data-filter');
  $galleryContainer.isotope({
    filter: value 
  })
})


/*Change Cpoyright Year*/
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
