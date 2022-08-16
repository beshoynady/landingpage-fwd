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
//select the sections by TagName
let sections = document.getElementsByTagName("section");
//select unordered lists  by ID
let ul = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * 
 * Begin Main Functions
 *
 */
// build the nav
// function build the nav and add li dynamically
function addLi() {
    //Four lobes to create li with the number of the section
    for (let i = 0; i < sections.length; i++) {
        //Create li
        let li = document.createElement("li");
        // Add an anchor for each li
        li.innerHTML = `<a class="menu__link" href="#${sections[i].getAttribute(
        "id"
        )}"> ${sections[i].getAttribute("data-nav")} </a>`;
        //Add items to unordered lists
        ul.appendChild(li);
    }
}
addLi();


// Add class 'active' to section when near top of viewport
//
window.addEventListener("scroll", function () {
    for (sec of sections) {
        if (
            //Use the getBoundingClientRect() function to calculate the distance between the section and the top of the page
        sec.getBoundingClientRect().top < 100 &&
        sec.getBoundingClientRect().top > -400
        ) {
        sec.classList.add("your-active-class");
        // Add class 'active' to anchor when click it or near of his section viewport
            for (a of anchor) {
                if (a.getAttribute("href").slice(1) == sec.getAttribute("id")) {
                a.classList.add("active");
                } else {
                a.classList.remove("active");
                }
            }

        } else {
        sec.classList.remove("your-active-class");
        }
    }
});


//#### begin the code Scroll to section smoothly  ######
//create list of anchor nav 
let anchor = document.querySelectorAll(".menu__link");
 // When you click on the link, Default for href is prevented and goes to to section smoothly
anchor.forEach((a) => {
    a.addEventListener("click", (e) => {
        e.preventDefault();

        //Select section by ID associated with Anchor clicked
        let sectoscroll = document.querySelector(a.getAttribute("href"));

        sectoscroll.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        });
    });
});

// end the code Scroll to section smoothly




/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
// Scroll to section on link click

// Set sections as active
