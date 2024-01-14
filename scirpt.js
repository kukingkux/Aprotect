const swiper = new Swiper(".swiper", {
  slidesPerColumnFill: "column",
  slidesPerView: 'auto',
  freeMode: {
    enabled: true,
  },
  grid: {
    fill: "row",
    rows: 2,
  },
  spaceBetween: 20,
});