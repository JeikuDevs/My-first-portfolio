function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  
/*-------------SHOW AND HIDE USING JAVASCRIPT---------*/

  document.addEventListener("DOMContentLoaded", function () {
    const g2 = document.querySelectorAll(".g2");
    const moreButton = document.querySelector(".more");
    const backButton = document.querySelector(".back");

    moreButton.addEventListener("click", (e) => {
      g2.forEach((img) => {
        img.classList.remove("hide");
       
      });

       moreButton.classList.add("hide");
       backButton.classList.remove("hide");
    });

 
    backButton.addEventListener("click",(e) => {
         g2.forEach((img) => {
        img.classList.add("hide");
       
      });

       moreButton.classList.remove("hide");
       backButton.classList.add("hide");
    });
    });


    /*-------------CHANGING COLOR AND TEXT USING JAVASCRIPT---------*/
    var typed = new Typed('#me', {
      strings: ['<span style="color: rgba(251, 209, 25, 0.873);">Jervy Jake O. Morales</span>', 
      '<span style="color:rgb(25, 168, 244);">Jervy Jake O. Morales</span>',  '<span style="color:rgb(119, 234, 77);">Jervy Jake O. Morales</span>'
    ,  '<span style="color:rgb(243, 106, 106);">Jervy Jake O. Morales</span>'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 10,
      loop:true
      
    });


    