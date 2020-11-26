
window.addEventListener("load", openShop);
//create shop with limitations of display?

async function openShop () {
    var req = await fetch("api/products.json");
    var products = await req.json();

    var shop = document.getElementById("CATALOG");
    //map through all items then place them in the shop
    products.map(item=> {
        shop.innerHTML += `
            <div class="products">
                <div class="images" style="background-image: url('${item.images}')">
                    <button type="button" class="details">Quick View</button>
                </div>
                <div class="brands">${item.brand}</div>
                <div class="models">${item.model}</div>
                <div class="prices">${item.price}</div>
                <div class="categories">${item.type}</div>
                <button type="button" class="addtocart">Add To Cart</button>
            </div>
        `;
    })
}