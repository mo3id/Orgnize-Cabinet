// function togglePopup() {
//   document.getElementById("popup-1").classList.toggle("active");
// }

// $(".Click-here").on('click', function() {
//   $(".custom-model-main").addClass('model-open');
// }); 
$(".close-btn, .bg-overlay").click(function(){
  $(".custom-model-main").removeClass('model-open');
});

let itemButton = `<button class="Click-here">+ Item</button>`;
// let answerDiv = `<span></span>`

chooseClothes = () => {
  $(".custom-model-main").addClass('model-open');
}