function goToProducts() {
  window.location.href = "products.html";
}

function showWelcome() {
  alert("At TechZone, we focus on useful products, clear information, and friendly customer support!");
}

function addToCart(productName) {
  alert(productName + " has been added to your demo cart!");
}

function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  document.getElementById("form-status").textContent =
    "Thank you, " + name + "! Your demo message has been received.";
  event.target.reset();
}
