var sSlide1 = document.querySelector(".services .slide-1");
var sSlide2 = document.querySelector(".services .slide-2");
var sSlide3 = document.querySelector(".services .slide-3");
var sSlideBtn1 = document.querySelector(".services .slider-controls li:nth-child(1)");
var sSlideBtn2 = document.querySelector(".services .slider-controls li:nth-child(2)");
var sSlideBtn3 = document.querySelector(".services .slider-controls li:nth-child(3)");
var overlay = document.querySelector(".overlay");
var mapLink = document.querySelector(".map");
var map = document.querySelector(".map-modal");
var mapClose = map.querySelector(".map-modal-close");
var feedbackLink = document.querySelector(".feedback");
var feedbackForm = document.querySelector(".feedback-form-modal");
var feedbackClose = feedbackForm.querySelector(".feedback-form-close");

sSlideBtn1.addEventListener("click", function(e) {
	event.preventDefault();
	sSlide1.classList.add("show");
	sSlideBtn1.classList.add("active");
	sSlide2.classList.remove("show");
	sSlideBtn2.classList.remove("active");
	sSlide3.classList.remove("show");
	sSlideBtn3.classList.remove("active");
});

sSlideBtn2.addEventListener("click", function(e) {
	event.preventDefault();
	sSlide1.classList.remove("show");
	sSlideBtn1.classList.remove("active");
	sSlide2.classList.add("show");
	sSlideBtn2.classList.add("active");
	sSlide3.classList.remove("show");
	sSlideBtn3.classList.remove("active");
});

sSlideBtn3.addEventListener("click", function(e) {
	event.preventDefault();
	sSlide1.classList.remove("show");
	sSlideBtn1.classList.remove("active");
	sSlide2.classList.remove("show");
	sSlideBtn2.classList.remove("active");
	sSlide3.classList.add("show");
	sSlideBtn3.classList.add("active");
});

mapLink.addEventListener("click", function(e) {
	event.preventDefault();
	overlay.classList.add("show");
	map.classList.add("show");
});

mapClose.addEventListener("click", function(e) {
	overlay.classList.remove("show");
	map.classList.remove("show");
});

overlay.addEventListener("click", function(e) {
	overlay.classList.remove("show");
	map.classList.remove("show");
	feedbackForm.classList.remove("show");
});

window.addEventListener("keydown", function(e) {
	if (event.keyCode == 27) {
		overlay.classList.remove("show");
		map.classList.remove("show");
		feedbackForm.classList.remove("show");
	};
});

feedbackLink.addEventListener("click", function(e) {
	event.preventDefault();
	overlay.classList.add("show");
	feedbackForm.classList.add("show");
});

feedbackClose.addEventListener("click", function(e) {
	overlay.classList.remove("show");
	feedbackForm.classList.remove("show");
});