// cart.js
function addToCart(bookName) {
  // ดึงข้อมูลจาก LocalStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // เพิ่มหนังสือใหม่
  cart.push(bookName);

  // บันทึกกลับไปที่ LocalStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // ไปยังหน้า cart.html
  window.location.href = 'cart.html';
}
