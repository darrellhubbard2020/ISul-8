
var cart = [];  //create an empty cart to store items in.

localStorage.setItem("your shopping cart", JSON.stringify(cart));

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
                <button type="button" class="addtocart" value="${item.id}" onclick="CHECKIFITEMEXISTS(this)">Add To Cart</button>
            </div>
        `;
    })
}


function ADDTOCART (e) {
    var shoppingCart = JSON.parse(localStorage.getItem("your shopping cart"));

    var newItem = e.value;
    var item = {
        "id": `${newItem}`,
        "qty": 1
    }   //will define the id and the amount to purchase.

    cart.push(item);
    localStorage.setItem("your shopping cart", JSON.stringify(cart));
    console.log("You have added product id:\t" + newItem);

    console.log("Shopping Cart Length:\t" + (shoppingCart.length + 1));

}

function CHECKIFITEMEXISTS (e) {
    var shoppingCart = JSON.parse(localStorage.getItem("your shopping cart"));
    console.log(e.value);
    if (shoppingCart.length >= 1) {
        //check cart to see if item adding exists
        for (var i = 0; i <= shoppingCart.length; i++) {
            console.log("Item:\t" + shoppingCart[i]);
            if (shoppingCart[i]["id"] === `${e.value}`) {
                console.log("item found");
            }
            else {
                console.log("no items in your cart");
                return ADDTOCART(`${e.value}`);
            }
        }
    }
    else if (shoppingCart.length <= 0) {
        console.log("there are no items in your cart");
        return ADDTOCART(e.value);
    }
}

function CARTQUANTITY () {
    
}