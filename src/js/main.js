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

function initMenuActivePage() {
  const links = document.querySelectorAll(
    ".site-navigation .navigation-list__link"
  );

  const currentLocationPathname = window.location.pathname;

  Array.from(links).map((link) => {
    const href = link.getAttribute("href");

    if (
      href === currentLocationPathname ||
      (currentLocationPathname === "/item.html" && href === "/shop.html")
    ) {
      link.classList.add("navigation-list__link--active");
    }
  });
}

// https://swiperjs.com/demos/

initMenuActivePage();


var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
