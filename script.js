let cart = [];

function addToCart(name, price) {
    // Cek jika item sudah ada di keranjang
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Bersihkan tampilan keranjang sebelum menambah item baru
    cartItemsContainer.innerHTML = "";

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement("li");
        cartItem.innerText = `${item.name} - Rp ${(item.price * 1000)} x ${item.quantity} = Rp ${(itemTotal * 1000)}`;
        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceElement.innerText = `Total Harga: Rp ${(total * 1000)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang Anda kosong. Tambahkan item sebelum checkout.");
        return;
    }

    let orderSummary = "Ringkasan Pesanan:\n";
    cart.forEach(item => {
        orderSummary += `${item.name} x ${item.quantity} - Rp ${((item.price * 1000) * item.quantity)}\n`;
    });

    orderSummary += `\nTotal: Rp ${cart.reduce((acc, item) => acc + ((item.price * 1000) * item.quantity), 0)}`;
    alert(orderSummary);
    cart = [];
    updateCart();
}

// js untuk burger menu

function toggleMenu() {
    const navList = document.getElementById('nav-list');
    if (navList.style.display === 'flex') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'flex';
        navList.style.flexDirection = 'column'; // Agar menu ditampilkan secara vertikal
        navList.style.position = 'absolute'; // Agar menu tidak mengganggu layout
        navList.style.backgroundColor = 'white'; // Tambahkan background jika perlu
        navList.style.width = '100%'; // Agar menu memenuhi lebar layar
        navList.style.zIndex = '1000'; // Agar menu di atas konten lainnya
    }
}