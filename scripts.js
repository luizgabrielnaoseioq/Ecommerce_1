// JavaScript para interagir com o carrinho
let cartCount = 0;

const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Função que atualiza a quantidade de itens no carrinho
function updateCart() {
  cartCountElement.textContent = cartCount;
}

// Função que adiciona um item ao carrinho
function addToCart() {
  cartCount++;
  updateCart();
}

// Adicionando o evento de clique nos botões
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
