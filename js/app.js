/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let sections = document.getElementsByTagName('section');
let ul = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function addLi(){
    for(let i=0; i<sections.length; i++){
        let li = document.createElement('li');
        li.innerHTML=`<a class="menu__link" href="#${sections[i].getAttribute("id")}"> ${sections[i].getAttribute("data-nav")} </a>`;
        ul.appendChild(li);
    }
}
addLi();
// build the nav

// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", function(){
    for(sec of sections){
        sec.classList.remove("your-active-class");
        if(sec.getBoundingClientRect().top > -100 &&
        sec.getBoundingClientRect().top < 500){
            sec.classList.add("your-active-class");
        }
    }
}) 
// Scroll to anchor ID using scrollTO event
let anchor = document.querySelectorAll('.menu__link');
    // console.log(anchor);
    anchor.forEach((a)=>{
        // console.log(a);
        a.addEventListener("click", (e)=>{
            e.preventDefault();
            let sectoscroll = document.querySelector(a.getAttribute('href'));
            sectoscroll.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        } )
    })
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Scroll to section on link click

// Set sections as active

