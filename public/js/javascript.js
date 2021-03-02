
/*****LOADING PART */

var myLoader;
function loading() {
    myLoader = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").style.display = "block";
}


