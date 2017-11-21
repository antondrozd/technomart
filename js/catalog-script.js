var basket = document.querySelector(".header-top .basket");
var goodsAmount = 0;
var cartModal = document.querySelector(".cart-modal");
var cartModalClose = cartModal.querySelector(".cart-modal-close");
var cartModalContinue = cartModal.querySelector(".cart-modal .continue");
var linkCartModal = document.querySelectorAll(".goods-item .buy");

for (var i = 0; i < linkCartModal.length; i++) {
	linkCartModal[i].addEventListener("click", function(e) {
		e.preventDefault();
		cartModal.classList.add("show");
		basket.classList.add("basket-with-goods");
		goodsAmount++;
		document.getElementById("goods-amount").innerHTML = goodsAmount;
	})
};

cartModalClose.addEventListener("click", function(e) {
	e.preventDefault();
	cartModal.classList.remove("show");
});

cartModalContinue.addEventListener("click", function(e) {
	e.preventDefault();
	cartModal.classList.remove("show");
});