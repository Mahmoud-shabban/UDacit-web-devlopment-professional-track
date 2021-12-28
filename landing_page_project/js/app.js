// variables to be used later
const nav = document.querySelector('#navbar__list');
//creating the navigation Bar
for (let i = 1; i < 5; ++i) {                   // loopping four times to creare four sections 
    navBar = `  <li class="section${i}">
                    <a href="#section${i}">Section ${i}</a>
                </li>`;
    nav.insertAdjacentHTML('beforeend', navBar);;       // append the created sections to the nave bar 
};

// variables to be used later in the functions 
const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('nav .container ul li');

// function to active the section inviewport 
window.addEventListener('scroll', function () {
    let currentView = '';
    sections.forEach(function (section) {
        // console.log(`top  = ${section.offsetTop}`)
        // console.log(`YOffset  = ${pageYOffset}`)
        if (pageYOffset >= section.offsetTop - 200) {           // determine the coordinates of the sections 
            currentView = section.getAttribute('id');           // getting the ID of the section to be used to add the active state
        }

    })
    navList.forEach(function (item) {

        if (item.classList.contains(currentView)) {         // add the active class if the section is showing 
            item.classList.add('active')

        } else {
            item.classList.remove('active');                // remove the active class when we scroll away
        };
    });

});

// Creating the smooth scrooling (using JS API)
navList.forEach(function (anch) {
    anch.addEventListener("click", function (sec) {
        sec.preventDefault();               // preventing the default behavior to create a smooth behavior later       
        var section = document.querySelector(sec.target.attributes.href.value);  // getting the section info 
        window.scroll({                     // creating the new behavior "smooth"
            top: section.offsetTop, behavior: "smooth",
        });
        // console.log(section.offsetTop);
    });
});

// Creating the smooth scrooling (another way using CSS API)
// document.querySelector('html').style.scrollBehavior = 'smooth';

