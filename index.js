var menuBars = true;
var menuOpen = document.getElementById("sidemenu");
$(".menu-toggle").click(
    function() {
        if(menuBars) menuOpen.style.transition = "0.4s";
        menuOpen.style.left = "0";
});

$(".nav-toggle").click(
    function() {
        if(menuBars) menuOpen.style.transition = "0.7s";
        menuOpen.style.left = "-100rem";
});

