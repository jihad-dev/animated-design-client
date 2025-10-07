// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Logo swiper
const logoSwiper = new Swiper('.logo-swiper', {
  slidesPerView: 2.2,
  spaceBetween: 24,
  loop: true,
  autoplay: { delay: 0, disableOnInteraction: false },
  speed: 3800,
  allowTouchMove: false,
  breakpoints: {
    640: { slidesPerView: 4 },
    960: { slidesPerView: 6 },
    1200: { slidesPerView: 8 }
  }
});

// FAQ accordion
document.querySelectorAll('.accordion .item .head').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.item');
    item.classList.toggle('open');
    const expanded = item.classList.contains('open');
    btn.setAttribute('aria-expanded', String(expanded));
  });
});

// Budget pills
const pills = document.querySelectorAll('.pill');
const budgetInput = document.getElementById('budget-input');
pills.forEach(p => {
  p.addEventListener('click', () => {
    pills.forEach(x => x.classList.remove('active'));
    p.classList.add('active');
    if (budgetInput) budgetInput.value = p.dataset.value || '';
  });
});


