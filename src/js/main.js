//= ../../node_modules/@iconfu/svg-inject/dist/svg-inject

var mySwiper = new Swiper(".index-gallery", {
  // loop: true,
  navigation: {
    nextEl: ".index-gallery__next",
    prevEl: ".index-gallery__prev",
  },
});

function mapModalOpen() {
  const mapModal = document.querySelector("#map");
  return mapModal.classList.toggle("visually-hidden");
}
function loginModalOpen() {
  const loginModal = document.querySelector("#login");
  return loginModal.classList.toggle("visually-hidden");
}
