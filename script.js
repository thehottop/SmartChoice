const products = [
    {
        id: 1,
        name: "Samsung Galaxy S24",
        category: "smartphones",
        icon: "📱",
        offers: [
            { shop: "Shop A", price: 28999 },
            { shop: "Shop B", price: 27499 },
            { shop: "Shop C", price: 29999 }
        ]
    },
    {
        id: 2,
        name: "iPhone 16",
        category: "smartphones",
        icon: "📱",
        offers: [
            { shop: "Shop A", price: 32999 },
            { shop: "Shop B", price: 31999 },
            { shop: "Shop C", price: 33999 }
        ]
    },
    {
        id: 3,
        name: "Xiaomi Redmi Note 14",
        category: "smartphones",
        icon: "📱",
        offers: [
            { shop: "Shop A", price: 8999 },
            { shop: "Shop B", price: 8499 },
            { shop: "Shop C", price: 9299 }
        ]
    },
    {
        id: 4,
        name: "Игровой ноутбук",
        category: "computers",
        icon: "💻",
        offers: [
            { shop: "Shop A", price: 35999 },
            { shop: "Shop B", price: 34999 },
            { shop: "Shop C", price: 37999 }
        ]
    },
    {
        id: 5,
        name: "Монитор 27 дюймов",
        category: "computers",
        icon: "🖥️",
        offers: [
            { shop: "Shop A", price: 7999 },
            { shop: "Shop B", price: 7499 },
            { shop: "Shop C", price: 8299 }
        ]
    },
    {
        id: 6,
        name: "Sony WH-1000XM5",
        category: "accessories",
        icon: "🎧",
        offers: [
            { shop: "Shop A", price: 13999 },
            { shop: "Shop B", price: 12999 },
            { shop: "Shop C", price: 14999 }
        ]
    },
    {
        id: 7,
        name: "Беспроводная мышь",
        category: "accessories",
        icon: "🖱️",
        offers: [
            { shop: "Shop A", price: 899 },
            { shop: "Shop B", price: 799 },
            { shop: "Shop C", price: 999 }
        ]
    },
    {
        id: 8,
        name: "Механическая клавиатура",
        category: "accessories",
        icon: "⌨️",
        offers: [
            { shop: "Shop A", price: 2499 },
            { shop: "Shop B", price: 2299 },
            { shop: "Shop C", price: 2699 }
        ]
    },
    {
        id: 9,
        name: "Пылесос",
        category: "home",
        icon: "🧹",
        offers: [
            { shop: "Shop A", price: 4999 },
            { shop: "Shop B", price: 4599 },
            { shop: "Shop C", price: 5299 }
        ]
    },
    {
        id: 10,
        name: "Кофемашина",
        category: "home",
        icon: "☕",
        offers: [
            { shop: "Shop A", price: 6999 },
            { shop: "Shop B", price: 6499 },
            { shop: "Shop C", price: 7299 }
        ]
    },
    {
        id: 11,
        name: "Настольная лампа",
        category: "home",
        icon: "💡",
        offers: [
            { shop: "Shop A", price: 799 },
            { shop: "Shop B", price: 699 },
            { shop: "Shop C", price: 899 }
        ]
    },
    {
        id: 12,
        name: "PlayStation 5",
        category: "games",
        icon: "🎮",
        offers: [
            { shop: "Shop A", price: 22999 },
            { shop: "Shop B", price: 21999 },
            { shop: "Shop C", price: 23999 }
        ]
    },
    {
        id: 13,
        name: "Игровой контроллер",
        category: "games",
        icon: "🕹️",
        offers: [
            { shop: "Shop A", price: 2999 },
            { shop: "Shop B", price: 2799 },
            { shop: "Shop C", price: 3199 }
        ]
    },
    {
        id: 14,
        name: "Apple Watch",
        category: "gadgets",
        icon: "⌚",
        offers: [
            { shop: "Shop A", price: 11999 },
            { shop: "Shop B", price: 10999 },
            { shop: "Shop C", price: 12499 }
        ]
    },
    {
        id: 15,
        name: "Фитнес-браслет",
        category: "gadgets",
        icon: "⌚",
        offers: [
            { shop: "Shop A", price: 1499 },
            { shop: "Shop B", price: 1299 },
            { shop: "Shop C", price: 1699 }
        ]
    }
];

const results = document.getElementById("searchResults");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const catalogTitle = document.getElementById("catalogTitle");
const productsCount = document.getElementById("productsCount");
const modal = document.getElementById("compareModal");

let currentCategory = "all";

function renderProducts(list) {
    results.innerHTML = "";

    productsCount.textContent = "Товаров: " + list.length;

    if (list.length === 0) {
        results.innerHTML =
            '<p class="no-results">Товары не найдены. Попробуй другой запрос.</p>';
        return;
    }

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        const icon = document.createElement("div");
        icon.className = "product-icon";
        icon.textContent = product.icon;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const description = document.createElement("p");
        description.textContent = "Предложения от 3 магазинов";

        const button = document.createElement("button");
        button.className = "compare-button";
        button.textContent = "Сравнить цены";
        button.addEventListener("click", () => openCompare(product.id));

        card.append(icon, name, description, button);
        results.appendChild(card);
    });
}

function showCategory(category) {
    currentCategory = category;

    const categoryNames = {
        all: "Все товары",
        smartphones: "Смартфоны",
        computers: "Компьютеры",
        accessories: "Аксессуары",
        home: "Товары для дома",
        games: "Игры",
        gadgets: "Гаджеты"
    };

    catalogTitle.textContent = categoryNames[category];

    document.querySelectorAll(".category").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.category === category
        );
    });

    searchInput.value = "";

    const filtered = category === "all"
        ? products
        : products.filter(product => product.category === category);

    renderProducts(filtered);
}

function searchProduct() {
    const query = searchInput.value.trim().toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    catalogTitle.textContent = query
        ? "Результаты поиска"
        : "Все товары";

    document.querySelectorAll(".category").forEach(button => {
        button.classList.remove("active");
    });

    currentCategory = "all";
    renderProducts(filtered);
}

function openCompare(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    document.getElementById("modalTitle").textContent = product.name;

    const priceResults = document.getElementById("priceResults");
    priceResults.innerHTML = "";

    const sortedOffers = [...product.offers].sort(
        (a, b) => a.price - b.price
    );

    sortedOffers.forEach(offer => {
        const row = document.createElement("div");
        row.className = "price-row";

        const shop = document.createElement("span");
        shop.textContent = offer.shop;

        const price = document.createElement("strong");
        price.textContent = offer.price.toLocaleString("uk-UA") + " ₴";

        row.append(shop, price);
        priceResults.appendChild(row);
    });

    modal.style.display = "flex";
}

function closeCompare() {
    modal.style.display = "none";
}

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        showCategory(button.dataset.category);
    });
});

searchButton.addEventListener("click", searchProduct);

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchProduct();
    }
});

document.getElementById("closeModal").addEventListener("click", closeCompare);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeCompare();
    }
});

showCategory("all");