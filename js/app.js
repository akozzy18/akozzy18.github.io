const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-Links');
    const navLinks = document.querySelectorAll('.nav-Links li');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      
      navLinks.forEach((Link, index) => {
        if (Link.style.animation) {
          Link.style.animation = '';
        } else {
          Link.style.animation = `navlinkFade 0.5s ease forwards ${index / 1 + 1.5}s`;
        }
      });
    
      burger.classList.toggle('toggle');
    
    });
}
  
navSlide();
  