let order = [];
let total = 0;

function orderItem(itemName, itemPrice) {
    order.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    const totalPrice = document.getElementById('total-price');

    orderSummary.innerHTML = ''; // Clear the current summary

    order.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - Rp${(item.price * 1000).toLocaleString('id-ID')}`;
        orderSummary.appendChild(itemDiv);
    });

    totalPrice.textContent = `Total: Rp${(total * 1000).toLocaleString('id-ID')}`;
}