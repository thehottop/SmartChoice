
const products = [
    {
        id: 1,
        name: "Samsung Galaxy S24",
        category: "smartphones",
        icon: "📱",
        description: "Смартфон Samsung",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 28999, url: "" },
            { shop: "Shop B", price: 27499, url: "" },
            { shop: "Shop C", price: 29999, url: "" }
        ]
    },
    {
        id: 2,
        name: "iPhone 16",
        category: "smartphones",
        icon: "📱",
        description: "Смартфон Apple",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 32999, url: "" },
            { shop: "Shop B", price: 31999, url: "" },
            { shop: "Shop C", price: 33999, url: "" }
        ]
    },
    {
        id: 3,
        name: "Xiaomi Redmi Note 14",
        category: "smartphones",
        icon: "📱",
        description: "Смартфон Xiaomi",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 8999, url: "" },
            { shop: "Shop B", price: 8499, url: "" },
            { shop: "Shop C", price: 9299, url: "" }
        ]
    },
    {
        id: 4,
        name: "Игровой ноутбук",
        category: "computers",
        icon: "💻",
        description: "Ноутбук для игр",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 35999, url: "" },
            { shop: "Shop B", price: 34999, url: "" },
            { shop: "Shop C", price: 37999, url: "" }
        ]
    },
    {
        id: 5,
        name: "Монитор 27 дюймов",
        category: "computers",
        icon: "🖥️",
        description: "Компьютерный монитор",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 7999, url: "" },
            { shop: "Shop B", price: 7499, url: "" },
            { shop: "Shop C", price: 8299, url: "" }
        ]
    },
    {
        id: 6,
        name: "Sony WH-1000XM5",
        category: "accessories",
        icon: "🎧",
        description: "Беспроводные наушники",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 13999, url: "" },
            { shop: "Shop B", price: 12999, url: "" },
            { shop: "Shop C", price: 14999, url: "" }
        ]
    },
    {
        id: 7,
        name: "Беспроводная мышь",
        category: "accessories",
        icon: "🖱️",
        description: "Компьютерная мышь",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 899, url: "" },
            { shop: "Shop B", price: 799, url: "" },
            { shop: "Shop C", price: 999, url: "" }
        ]
    },
    {
        id: 8,
        name: "Механическая клавиатура",
        category: "accessories",
        icon: "⌨️",
        description: "Игровая клавиатура",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 2499, url: "" },
            { shop: "Shop B", price: 2299, url: "" },
            { shop: "Shop C", price: 2699, url: "" }
        ]
    },
    {
        id: 9,
        name: "Пылесос",
        category: "home",
        icon: "🧹",
        description: "Пылесос для дома",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 4999, url: "" },
            { shop: "Shop B", price: 4599, url: "" },
            { shop: "Shop C", price: 5299, url: "" }
        ]
    },
    {
        id: 10,
        name: "Кофемашина",
        category: "home",
        icon: "☕",
        description: "Кофемашина для дома",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 6999, url: "" },
            { shop: "Shop B", price: 6499, url: "" },
            { shop: "Shop C", price: 7299, url: "" }
        ]
    },
    {
        id: 11,
        name: "Настольная лампа",
        category: "home",
        icon: "💡",
        description: "Лампа для рабочего стола",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 799, url: "" },
            { shop: "Shop B", price: 699, url: "" },
            { shop: "Shop C", price: 899, url: "" }
        ]
    },
    {
        id: 12,
        name: "PlayStation 5",
        category: "games",
        icon: "🎮",
        description: "Игровая консоль",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 22999, url: "" },
            { shop: "Shop B", price: 21999, url: "" },
            { shop: "Shop C", price: 23999, url: "" }
        ]
    },
    {
        id: 13,
        name: "Игровой контроллер",
        category: "games",
        icon: "🕹️",
        description: "Контроллер для игр",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 2999, url: "" },
            { shop: "Shop B", price: 2799, url: "" },
            { shop: "Shop C", price: 3199, url: "" }
        ]
    },
    {
        id: 14,
        name: "Apple Watch",
        category: "gadgets",
        icon: "⌚",
        description: "Умные часы Apple",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 11999, url: "" },
            { shop: "Shop B", price: 10999, url: "" },
            { shop: "Shop C", price: 12499, url: "" }
        ]
    },
    {
        id: 15,
        name: "Фитнес-браслет",
        category: "gadgets",
        icon: "⌚",
        description: "Фитнес-браслет",
        currency: "UAH",
        updatedAt: "2026-11-20",
        offers: [
            { shop: "Shop A", price: 1499, url: "" },
            { shop: "Shop B", price: 1299, url: "" },
            { shop: "Shop C", price: 1699, url: "" }
        ]
    }
];

const results = document.getElementById("searchResults");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const catalogTitle = document.getElementById("catalogTitle");
const productsCount = document.getElementById("productsCount");
const modal = document.getElementById("compareModal");

function renderProducts(list) {
    results.innerHTML = "";
    productsCount.textContent = "Товаров: " + list.length;

    if (list.length === 0) {
        results.innerHTML =
            '<p class="no-results">Товары не найдены.</p>';
        return;
    }

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        const cheapest = Math.min(
            ...product.offers.map(offer => offer.price)
        );

        card.innerHTML = `
            <div class="product-icon">${product.icon}</div>
            <h3></h3>
            <p></p>
            <p>От ${cheapest.toLocaleString("uk-UA")} ₴</p>
            <button class="compare-button">Сравнить цены</button>
        `;

        card.querySelector("h3").textContent = product.name;
        card.querySelectorAll("p")[0].textContent = product.description;

        card.querySelector("button").addEventListener("click", () => {
            openCompare(product.id);
        });

        results.appendChild(card);
    });
}

function showCategory(category) {
    const names = {
        all: "Все товары",
        smartphones: "Смартфоны",
        computers: "Компьютеры",
        accessories: "Аксессуары",
        home: "Товары для дома",
        games: "Игры",
        gadgets: "Гаджеты"
    };

    catalogTitle.textContent = names[category];

    document.querySelectorAll(".category").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.category === category
        );
    });

    searchInput.value = "";

    const filtered = category === "all"
        ? products
        : products.filter(item => item.category === category);

    renderProducts(filtered);
}

function searchProduct() {
    const query = searchInput.value.trim().toLowerCase();

    const filtered = products.filter(product =>
        (product.name + " " + product.description)
            .toLowerCase()
            .includes(query)
    );

    catalogTitle.textContent = "Результаты поиска";

    document.querySelectorAll(".category").forEach(button => {
        button.classList.remove("active");
    });

    renderProducts(filtered);
}

function openCompare(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    document.getElementById("modalTitle").textContent = product.name;

    const priceResults = document.getElementById("priceResults");
    priceResults.innerHTML = "";

    const sorted = [...product.offers].sort(
        (a, b) => a.price - b.price
    );

    sorted.forEach(offer => {
        const row = document.createElement("div");
        row.className = "price-row";

        const shop = document.createElement("span");
        shop.textContent = offer.shop;

        const price = document.createElement("strong");
        price.textContent =
            offer.price.toLocaleString("uk-UA") + " ₴";

        row.append(shop, price);

        if (offer.url) {
            const link = document.createElement("a");
            link.href = offer.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "Перейти";
            link.style.color = "#3985ff";
            row.appendChild(link);
        }

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

document.getElementById("closeModal").addEventListener(
    "click",
    closeCompare
);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeCompare();
    }
});

showCategory("all");
