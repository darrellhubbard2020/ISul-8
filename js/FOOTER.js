
window.addEventListener("load", FOOTER);

function FOOTER () {
    var footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML = `
        <ul class="footer-navlinks">
            <label>Help</label>
            <li><a href="">NavLink</a><li>
            <li><a href="">Customer Service</a><li>
            <li><a href="">Returns</a><li>
            <li><a href="">Live Chat</a><li>
            <li><a href="">FAQ</a><li>                        
        </ul>

        <ul class="footer-navlinks">
            <label>About</label>
            <li><a href="">ISul 8 Company</a><li>
            <li><a href="">Store Hours</a><li>
            <li><a href="">What We Do</a><li>
            <li><a href="">Who We Are</a></li>
            <li><a href="">Careers</a><li>
            <li><a href="">FAQ</a><li>                        
        </ul>

        <ul class="footer-navlinks">
            <label>My Account</label>
            <li><a href="">Login/Signup</a><li>
            <li><a href="">Orders</a><li>
            <li><a href="">Cart</a><li>
            <li><a href="">Membership</a><li>                       
        </ul>

        <div id="STAYCONNECTEDCONTAINER">
            <label id="stayconnect-label">STAY CONNECTED</label>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
                <input type="text" placeholder="send us your email" />
                <button type="button">Let's Connect</button>
            </div>
            
            <div id="footer-socialnavbar">

                <div>
                    <img src="icons/facebook icon.png" />
                </div>

                <div>
                    <img src="icons/twitter icon.png" />
                </div> 

                <div>
                    <img src="icons/instagram icon.png" />
                </div>  

            </div>

        </div>

    `;
}