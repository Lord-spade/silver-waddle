// Sample data
const cartItems = [
    { id: 1, name: 'Item 1', quantity: 2, price: 10.00 },
    { id: 2, name: 'Item 2', quantity: 1, price: 20.00 },
    { id: 3, name: 'Item 3', quantity: 3, price: 15.00 }
  ];
  
  // Calculate total price of cart items
  function calculateCartTotal(cartItems) {
    let total = 0;
    for (const item of cartItems) {
      total += item.quantity * item.price;
    }
    return total.toFixed(2);
  }
  
  // Update cart table
  function updateCartTable(cartItems) {
    const cartItemsTableBody = document.getElementById('cart-items');
    let cartTableHtml = '';
    for (const item of cartItems) {
      cartTableHtml += `
        <tr>
          <td>${item.name}</td>
          <td>
            <input type="number" value="${item.quantity}" min="1" onchange="updateCartItemQuantity(${item.id}, this.value)">
          </td>
          <td>$${item.price.toFixed(2)}</td>
          <td>$${(item.quantity * item.price).toFixed(2)}</td>
          <td>
            <button onclick="removeCartItem(${item.id})">Remove</button>
          </td>
        </tr>
      `;
    }
    cartItemsTableBody.innerHTML =cartTableHtml;
    document.getElementById('cart-total').textContent = `$${calculateCartTotal(cartItems)}`;
  }
  
  // Update cart item quantity
  function updateCartItemQuantity(itemId, quantity) {
    // Update item quantity in cart data
    const cartItemIndex = cartItems.findIndex(item => item.id === itemId);
    cartItems[cartItemIndex].quantity = parseInt(quantity);
    // Update cart table
    updateCartTable(cartItems);
  }
  
  // Remove cart item
  function removeCartItem(itemId) {
    // Remove item from cart data
    const cartItemIndex = cartItems.findIndex(item => item.id === itemId);
    cartItems.splice(cartItemIndex, 1);
    // Update cart table
    updateCartTable(cartItems);
  }
  
  // Initialize cart table
  updateCartTable(cartItems);