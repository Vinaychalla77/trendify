
//cart.js
// Function to add item to cart with description from deal page
function addToCart(title, price, image, description) {
  // Retrieve existing cart items from localStorage, or initialize an empty array
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Create the new cart item
  const newItem = {
    title: title,
    price: price,
    image: image,
    description: description  // Add description here
  };

  // Add the new item to the cart
  cartItems.push(newItem);

  // Save updated cart to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  alert("Item added to cart!");
}





// Function to buy now (update product details for payment page)
function buyNow(index) {
  // Retrieve cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  // Get the selected item from the cart
  const selectedItem = cartItems[index];

  // Store the product details in localStorage
  localStorage.setItem('product_name', selectedItem.title);
  localStorage.setItem('price', selectedItem.price);
  localStorage.setItem('description', selectedItem.description || 'No description available');
  localStorage.setItem('product_id', index);  // Store the index as product ID or use unique ID

  // Redirect to the payment page
  window.location.href = 'payment.html';
}