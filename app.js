

const products = [
    { id: 1, name: "Tenis Nike Air Zoom Pegasus", category: "Calzado", price: 139.99, rating: 4.8, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Smartwatch Garmin Forerunner", category: "Tecnología", price: 299.99, rating: 4.9, image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Balón Oficial Adidas Champions", category: "Accesorios", price: 45.00, rating: 4.7, image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "Mancuernas Hexagonales 10kg", category: "Fitness", price: 59.99, rating: 4.6, image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "Tapete de Yoga Antideslizante", category: "Fitness", price: 29.99, rating: 4.5, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&auto=format&fit=crop&q=60" },
    { id: 6, name: "Audífonos Deportivos Bose", category: "Tecnología", price: 179.99, rating: 4.8, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" },
    { id: 7, name: "Cuerda de Salto de Alta Velocidad", category: "Fitness", price: 18.50, rating: 4.4, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60" },
    { id: 8, name: "Botella Térmica Hydro Flask", category: "Accesorios", price: 34.99, rating: 4.9, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60" },
    { id: 9, name: "Bicicleta Estática Profesional", category: "Fitness", price: 499.00, rating: 4.7, image: "https://images.unsplash.com/photo-1591741535018-d042766c62eb?w=500&auto=format&fit=crop&q=60" },
    { id: 10, name: "Mochila Deportiva Under Armour", category: "Accesorios", price: 49.99, rating: 4.6, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60" },
    { id: 11, name: "Tenis Adidas Ultraboost Light", category: "Calzado", price: 159.99, rating: 4.9, image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=60" },
    { id: 12, name: "Playera Dry-Fit Transpirable", category: "Ropa", price: 24.99, rating: 4.5, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60" },
    { id: 13, name: "Short de Entrenamiento Ligero", category: "Ropa", price: 29.99, rating: 4.4, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=60" },
    { id: 14, name: "Banda de Frecuencia Cardíaca Polar", category: "Tecnología", price: 89.99, rating: 4.8, image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&auto=format&fit=crop&q=60" },
    { id: 15, name: "Kettlebell de Hierro Fundido 16kg", category: "Fitness", price: 69.99, rating: 4.7, image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&auto=format&fit=crop&q=60" },
    { id: 16, name: "Bandas de Resistencia elásticas", category: "Fitness", price: 19.99, rating: 4.6, image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&auto=format&fit=crop&q=60" },
    { id: 17, name: "Guantes de Gimnasio con Muñequera", category: "Accesorios", price: 22.50, rating: 4.3, image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&auto=format&fit=crop&q=60" },
    { id: 18, name: "Gorra Deportiva Reflectante", category: "Accesorios", price: 18.00, rating: 4.5, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60" },
    { id: 19, name: "Tenis de Basquetbol Jordan Retro", category: "Calzado", price: 189.99, rating: 4.9, image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&auto=format&fit=crop&q=60" },
    { id: 20, name: "Sudadera Térmica con Capucha", category: "Ropa", price: 54.99, rating: 4.7, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60" },
    { id: 21, name: "Rodillo de Espuma Foam Roller", category: "Fitness", price: 25.00, rating: 4.8, image: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=500&auto=format&fit=crop&q=60" },
    { id: 22, name: "Lentes Deportivos Polarizados UV400", category: "Accesorios", price: 39.99, rating: 4.6, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60" },
    { id: 23, name: "Camiseta Compresión Manga Larga", category: "Ropa", price: 32.99, rating: 4.6, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60" },
    { id: 24, name: "Caminadora Plegable Inteligente", category: "Fitness", price: 649.99, rating: 4.8, image: "https://images.unsplash.com/photo-1576678927484-cc909957088c?w=500&auto=format&fit=crop&q=60" },
    { id: 25, name: "Raqueta de Tenis Wilson Pro Staff", category: "Accesorios", price: 210.00, rating: 4.9, image: "https://images.unsplash.com/photo-1617083934555-56321356f610?w=500&auto=format&fit=crop&q=60" },
    { id: 26, name: "Chamarra Rompevientos de Running", category: "Ropa", price: 64.99, rating: 4.5, image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=60" },
    { id: 27, name: "Gafas de Natación Anti-empañamiento", category: "Accesorios", price: 21.99, rating: 4.4, image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&auto=format&fit=crop&q=60" },
    { id: 28, name: "Electroestimulador Muscular Portátil", category: "Tecnología", price: 119.99, rating: 4.7, image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&auto=format&fit=crop&q=60" },
    { id: 29, name: "Calcetines Deportivos (Pack x3)", category: "Ropa", price: 14.99, rating: 4.6, image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&auto=format&fit=crop&q=60" },
    { id: 30, name: "Cinturón de Levantamiento de Pesas", category: "Fitness", price: 38.50, rating: 4.8, image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&auto=format&fit=crop&q=60" }
];

let cart = JSON.parse(localStorage.getItem('dportx_cart')) || [];

const productsGrid = document.getElementById('productsGrid');
const cartItemsList = document.getElementById('cartItemsList');
const cartBadge = document.getElementById('cartBadge');
const cartTotal = document.getElementById('cartTotal');
const filterButtons = document.getElementById('filterButtons');
const searchInput = document.getElementById('searchInput');
const checkoutBtn = document.getElementById('checkoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');

document.addEventListener('DOMContentLoaded', () => {
    if (productsGrid) {
        const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || !window.location.pathname.includes('catalogo');
        const itemsToRender = isHomePage ? products.slice(0, 8) : products;
        renderProducts(itemsToRender);
    }
    updateCartUI();
    setupEventListeners();
});

function renderProducts(items) {
    productsGrid.innerHTML = '';
    items.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'col-sm-6 col-lg-4 col-xl-3 product-card-enter';
        card.style.animationDelay = `${(index % 8) * 0.04}s`;
        
        card.innerHTML = `
            <div class="card h-100 bg-dark border-secondary border-opacity-25 hover-card overflow-hidden">
                <div class="position-relative overflow-hidden" style="height: 200px;">
                    <img src="${product.image}" class="card-img-top w-100 h-100 object-fit-cover" alt="${product.name}">
                    <span class="position-absolute top-0 end-0 bg-warning text-dark fw-bold badge m-2">
                        <i class="fa-solid fa-star text-dark me-1"></i>${product.rating}
                    </span>
                </div>
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <span class="text-uppercase text-secondary fs-7 fw-semibold">${product.category}</span>
                        <h3 class="h6 card-title fw-bold text-white mt-1 mb-2 text-truncate">${product.name}</h3>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-secondary border-opacity-25">
                        <span class="fs-5 fw-bold text-warning">$${product.price.toFixed(2)}</span>
                        <button class="btn btn-outline-warning btn-sm rounded-circle p-2 add-to-cart-btn" data-id="${product.id}" title="Agregar al carrito">
                            <i class="fa-solid fa-plus fs-6"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

function setupEventListeners() {
    if (productsGrid) {
        productsGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.add-to-cart-btn');
            if (btn) addToCart(parseInt(btn.dataset.id));
        });
    }

    if (filterButtons) {
        filterButtons.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const filter = e.target.dataset.filter;
                Array.from(filterButtons.children).forEach(b => {
                    b.classList.remove('btn-warning', 'text-dark', 'fw-bold', 'active');
                    b.classList.add('btn-outline-secondary');
                });
                e.target.classList.remove('btn-outline-secondary');
                e.target.classList.add('btn-warning', 'text-dark', 'fw-bold', 'active');

                renderProducts(filter === 'all' ? products : products.filter(p => p.category === filter));
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            renderProducts(products.filter(p => p.name.toLowerCase().includes(query)));
        });
    }

    cartItemsList.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        if (e.target.classList.contains('btn-increase')) updateQuantity(id, 1);
        if (e.target.classList.contains('btn-decrease')) updateQuantity(id, -1);
        if (e.target.closest('.btn-remove')) removeFromCart(parseInt(e.target.closest('.btn-remove').dataset.id));
    });

    clearCartBtn.addEventListener('click', () => {
        if (!cart.length) return;
        Swal.fire({
            title: '¿Vaciar carrito?',
            text: "Se eliminarán todos los productos seleccionados.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ffc107',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'Cancelar',
            customClass: { confirmButton: 'text-dark' }
        }).then((result) => {
            if (result.isConfirmed) {
                cart = [];
                saveCart();
                updateCartUI();
            }
        });
    });

    checkoutBtn.addEventListener('click', () => {
        if (!cart.length) {
            Swal.fire({
                icon: 'error',
                title: 'Carrito Vacío',
                text: 'Agrega al menos un producto para proceder.',
                confirmButtonColor: '#ffc107',
                customClass: { confirmButton: 'text-dark' }
            });
            return;
        }

        confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
        Swal.fire({
            icon: 'success',
            title: '¡Gracias por tu compra!',
            text: 'Tu pedido ha sido procesado exitosamente.',
            confirmButtonColor: '#ffc107',
            customClass: { confirmButton: 'text-dark' }
        }).then(() => {
            cart = [];
            saveCart();
            updateCartUI();
            const offcanvasEl = document.getElementById('cartOffcanvas');
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
            if (offcanvas) offcanvas.hide();
        });
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1 });

    saveCart();
    updateCartUI();

    cartBadge.classList.add('cart-bounce');
    setTimeout(() => cartBadge.classList.remove('cart-bounce'), 400);

    Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: 'success',
        title: `${product.name} agregado`,
        showConfirmButton: false,
        timer: 1500,
        background: '#212529',
        color: '#fff'
    });
}

function addNutritionService(serviceName, price) {
    const serviceId = 9000 + Math.floor(Math.random() * 100);
    const existing = cart.find(item => item.name === serviceName);

    if (existing) existing.quantity += 1;
    else cart.push({
        id: serviceId,
        name: serviceName,
        category: "Servicio",
        price: price,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60"
    });

    saveCart();
    updateCartUI();
    Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: 'success',
        title: `${serviceName} agregado al carrito`,
        showConfirmButton: false,
        timer: 1800,
        background: '#212529',
        color: '#fff'
    });
}

function updateQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) removeFromCart(id);
        else { saveCart(); updateCartUI(); }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('dportx_cart', JSON.stringify(cart));
}

function updateCartUI() {
    cartBadge.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${totalAmount.toFixed(2)}`;

    if (!cart.length) {
        cartItemsList.innerHTML = `
            <div class="text-center text-secondary py-5">
                <i class="fa-solid fa-cart-flatbed fs-1 mb-3 opacity-50"></i>
                <p>Tu carrito está vacío.</p>
            </div>
        `;
        return;
    }

    cartItemsList.innerHTML = cart.map(item => `
        <div class="d-flex align-items-center justify-content-between bg-black bg-opacity-40 p-2 rounded border border-secondary border-opacity-25">
            <img src="${item.image}" class="rounded object-fit-cover me-2" width="50" height="50" alt="${item.name}">
            <div class="flex-grow-1 min-w-0 me-2">
                <h4 class="h6 text-white text-truncate mb-1">${item.name}</h4>
                <div class="text-warning fw-bold small">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <div class="d-flex align-items-center gap-1">
                <button class="btn btn-sm btn-outline-secondary py-0 px-2 btn-decrease" data-id="${item.id}">-</button>
                <span class="px-1 small fw-bold text-white">${item.quantity}</span>
                <button class="btn btn-sm btn-outline-secondary py-0 px-2 btn-increase" data-id="${item.id}">+</button>
                <button class="btn btn-sm text-danger ms-1 btn-remove" data-id="${item.id}" title="Eliminar">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    `).join('');
}