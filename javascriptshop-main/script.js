
const badge = document.querySelector(".badge");
const addButton = document.querySelector(".cta-add");
const sizeButton = document.querySelector(".cta-select");

let cartCount = 0;

// när man klickar på "Add to Cart"
addButton.addEventListener("click", () => {
  cartCount++; 
  updateBadge(); 
  updateRemoveButton(); 
});

function updateRemoveButton() {
  if (cartCount > 0) {
    sizeButton.textContent = "Remove from cart";
    sizeButton.style.display = "inline-block"; 
  } else {
    sizeButton.textContent = "14 Inch";
    sizeButton.style.display = "none"; 
  }
}

// när man klickar på "Remove from cart"
sizeButton.addEventListener("click", () => {
  if (cartCount > 0) {
    cartCount--; 
    updateBadge(); 
    updateRemoveButton(); 
  }
});

function updateBadge() {
  badge.setAttribute("value", cartCount);
}

// kör en gång vid start så allt ser rätt ut
updateBadge();
updateRemoveButton();
