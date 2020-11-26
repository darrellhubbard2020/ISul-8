
window.addEventListener("load", Navbar);

//dynamically load navlinks; can add or subtract anytime without having to go through each page. 
function Navbar () {
    var navbar = document.getElementById("nav");
    navbar.innerHTML = `
        <a href="" class="site-navlinks">HOME</a>
        <a href="" class="site-navlinks">HEADPHONES</a>
        <a href="" class="site-navlinks">EARPHONES</a>
        <a href="" class="site-navlinks">WIRELESS</a>
        <a href="" class="site-navlinks">BLUETOOTH</a>
        <a href="" class="site-navlinks">NOISE CANCELLATION</a>
        <a href="" class="site-navlinks">ACCESSORIES</a>

    `;
}