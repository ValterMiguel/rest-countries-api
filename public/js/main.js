/*****LOADING PART */

// eslint-disable-next-line no-unused-vars
var myLoader;
// eslint-disable-next-line no-unused-vars
function loading() {
    myLoader = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").style.display = "block";
}