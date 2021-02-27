// // function to set a given theme/color-scheme

// // function setTheme(themeName) {
// //     localStorage.setItem('theme', themeName);
// //     document.documentElement.className = themeName;
// // }

// //function to toggle between light and dark theme

// // function toggleTheme() {
// //     if(localStorage.getItem('theme') === 'theme-dark') {
// //         setTheme('theme-light');
// //     } else {
// //         setTheme('theme-dark');
// //     }
// // }

// //Inmediately invoked function to set the theme on initial load

// ( function () {
//     if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-dark');
//     } else {
//         setTheme('theme-light');
//     }
// })();

// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// /*****LOADING PART */

var myLoader;

function loading() {
    myLoader = setTimeout(showPage, 4000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").style.display = "block";
}