// // <!-- Initialize Swiper -->
 
// var swiper = new Swiper(".home", {
//     spaceBetween: 30,
//     centeredSlides: true,
    
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

// // to make menu icon resposive and active
//   let menu = document.querySelector('#menu-icon');
//   let navbar = document.querySelector('.navbar');

//   menu.onclick = () =>{
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
//   }
//   window.onscroll =() =>{
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
//   }
  
var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
        delay: 2200,
        disableOnInteraction: false,
      },

  // If you need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // If you need navigation buttons
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// to make menu icon resposive and active
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll =() =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}


  // // Find the box element
  // const box = document.querySelector('.box1');
    
  // // Create the anchor element
  // const button = document.createElement('a');
  // button.href = 'https://search.yahoo.com/search?d=%7b%22dn%22%3a%22yk%22%2c%22subdn%22%3a%22software%22%2c%22ykid%22%3a%22816fa3a6-1848-4989-acbe-2882bf20015f%22%7d&fr2=p%3ads%2cv%3aomn%2cm%3asa%2cbrws%3achrome%2cpos%3a1&fr=mcafee&type=E210US91215G0&p=ChatGPT';
  // button.classList.add('button');

  // // Create the icon element
  // const icon = document.createElement('i');
  // icon.classList.add('bx', 'bx-right-arrow-alt');

  // // Append the icon to the anchor
  // button.appendChild(icon);

  // // Append the anchor to the box
  // box.appendChild(button);


  
