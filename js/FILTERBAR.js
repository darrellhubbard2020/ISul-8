
window.addEventListener("load", FILTERBAR);

async function FILTERBAR () {
    var req = await fetch("api/filters.json");
    var data = await req.json();
    var filterContainer = document.getElementById("FILTERSBAR");
    //map through the filters
    data.map(widget=> {
        //add to the innerHTML
        filterContainer.innerHTML += `
            <div class="filter-container">
                <div class="filter-label">${widget.label}</div>
                <div class="filter-list" id="${widget.label}"></div>
            </div>
        `;
    })
}

window.addEventListener("load", BRANDSFILTER);
//create a brands filter

async function BRANDSFILTER () {
    var req = await fetch("api/filters.json");
    var data = await req.json();
    var container = document.getElementById("BRAND");
    //loop through the filters
    for(var i = 0; i < data[0]["filterBy"].length; i++) {
        //add to the innerHTML
        container.innerHTML += `
            <div class="filter">
                <input type="checkbox" value="${data[0]["filterBy"][i]}" />
                <label>${data[0]["filterBy"][i]}</label>
            </div>
        `;
    }
}

window.addEventListener("load", CATEGORIESFILTER);

async function CATEGORIESFILTER () {
    var req = await fetch("api/filters.json");
    var data = await req.json();
    var container = document.getElementById("CATEGORY");
    //loop through the filters
    for(var i = 0; i < data[2]["filterBy"].length; i++) {
        //add to the innerHTML
        container.innerHTML += `
            <div class="filter">
                <input type="checkbox" value="${data[2]["filterBy"][i]}" />
                <label>${data[2]["filterBy"][i]}</label>
            </div>
        `;
    }
}

window.addEventListener("load", PRICEFILTER);

async function PRICEFILTER () {
    var req = await fetch("api/filters.json");
    var data = await req.json();
    var container = document.getElementById("PRICE");
    //loop through the filters
    for(var i = 0; i < data[1]["filterBy"].length; i++) {
        //add to the innerHTML
        container.innerHTML += `
            <div class="filter">
                <input type="checkbox" value="${data[1]["filterBy"][i]}" />
                <label>${data[1]["filterBy"][i]["low"]} to ${data[1]["filterBy"][i]["max"]}</label>
            </div>
        `;
    }
}