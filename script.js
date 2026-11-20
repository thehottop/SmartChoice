
// =====================================
// SMARTCHOICE — КАТАЛОГ ТОВАРОВ
// =====================================

const products = {
    "Samsung Galaxy S24": [
        { shop: "Shop A", price: 28999 },
        { shop: "Shop B", price: 27499 },
        { shop: "Shop C", price: 29999 }
    ],

    "Sony WH-1000XM5": [
        { shop: "Shop A", price: 13999 },
        { shop: "Shop B", price: 12999 },
        { shop: "Shop C", price: 14999 }
    ],

    "Apple Watch": [
        { shop: "Shop A", price: 11999 },
        { shop: "Shop B", price: 10999 },
        { shop: "Shop C", price: 12499 }
    ],

    "Xiaomi Redmi Note 14": [
        { shop: "Shop A", price: 8999 },
        { shop: "Shop B", price: 8499 },
        { shop: "Shop C", price: 9299 }
    ],

    "iPhone 16": [
        { shop: "Shop A", price: 32999 },
        { shop: "Shop B", price: 31999 },
        { shop: "Shop C", price: 33999 }
    ],

    "PlayStation 5": [
        { shop: "Shop A", price: 22999 },
        { shop: "Shop B", price: 21999 },
        { shop: "Shop C", price: 23999 }
    ]
};


// =====================================
// ПОИСК ТОВАРОВ
// =====================================

function searchProduct() {
    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");

    const query = input.value.trim().toLowerCase();

    results.innerHTML = "";

    if (query === "") {
        results.textContent = "Введи название товара.";
        return;
    }

    const found = Object.keys(products).filter(name =>
        name.toLowerCase().includes(query)
    );

    if (found.length === 0) {
        results.textContent = "Товар не найден.";
        return;
    }

    found.forEach(name => {
        const item = document.createElement("div");
        item.className = "search-result";

        const title = document.createElement("span");
        title.textContent = name;

        const button = document.createElement("button");
        button.textContent = "Сравнить цены";
        button.onclick = () => openCompare(name);

        item.appendChild(title);
        item.appendChild(button);

        results.appendChild(item);
    });
}


// =====================================
// СРАВНЕНИЕ ЦЕН
// =====================================

function openCompare(productName) {
    const modal = document.getElementById("compareModal");
    const title = document.getElementById("modalTitle");
    const results = document.getElementById("priceResults");

    if (!products[productName]) {
        return;
    }

    title.textContent = "Сравнение: " + productName;
    results.innerHTML = "";

    const sortedPrices = [...products[productName]].sort(
        (a, b) => a.price - b.price
    );

    sortedPrices.forEach((offer, index) => {
        const row = document.createElement("div");
        row.className = "price-row";

        const shop = document.createElement("span");
        shop.textContent = offer.shop;

        const price = document.createElement("strong");
        price.textContent =
            offer.price.toLocaleString("uk-UA") + " грн";

        if (index === 0) {
            shop.textContent += " — самая низкая цена";
        }

        row.appendChild(shop);
        row.appendChild(price);

        results.appendChild(row);
    });

    modal.style.display = "block";
}


// =====================================
// ЗАКРЫТИЕ ОКНА
// =====================================

function closeCompare() {
    document.getElementById("compareModal").style.display = "none";
}


// =====================================
// ПОИСК ПО ENTER
// =====================================

document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchProduct();
    }
});
