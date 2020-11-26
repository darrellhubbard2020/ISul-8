

window.addEventListener("load", HOMECAROUSEL);

async function HOMECAROUSEL () {
    let req = await fetch("api/promotions.json");
    let data = await req.json();

    var home = document.getElementById("HOMECAROUSEL");
    var previews = document.getElementsByClassName("home-promotion-preview")
    data.map((product, j )=> {
        home.innerHTML += `
            <div class="homecarousel">

                <div class="home-promotion-container" style="background-image: linear-gradient(to bottom, white 20%, ${product.slideBackgroundColor} 20%, ${product.slideBackgroundColor} 100%);">
                    <img src="${product.image}" />
                    <section>
                        <h1 class="home-promotion-titles">${product.name}</h1>
                        <h3 class="home-promotion-brands">${product.brand}</h3>
                        <p class="home-promotion-details">${product.details}</p>
                        <button type="" class="home-promotion-shop-buttons">SHOP NOW</button>
                    </section>
                </div>

            </div>
        `;
        //map all for class for each preview
        previews[j].src = `${product.image}`;
    })

}
