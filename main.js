document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});

const bgImages = document.querySelectorAll('.bg-image');
let currentIndex = 0;

// 最初に1枚目を表示
bgImages[currentIndex].classList.add('active');

// 4秒後に次の画像からスタート
setTimeout(() => {
  currentIndex = 1;
  switchBackground();
  setInterval(switchBackground, 4000);
}, 4000);

function switchBackground() {
  bgImages.forEach((img, i) => {
    img.classList.remove('active');
    if (i === currentIndex) {
      img.classList.add('active');
    }
  });
  currentIndex = (currentIndex + 1) % bgImages.length;
}

// スクロールによる表示切り替え
window.addEventListener('scroll', function () {
  const logoMini = document.querySelector('.logo-mini');
  const logoFull = document.querySelector('.logo-full');
  const copyText = document.querySelector('.copy-wrapper h1');

  const scrollY = window.scrollY;

  // 小ロゴ（logo2）表示
  if (scrollY > 80) {
    logoMini.classList.remove('hidden');
    logoMini.classList.add('visible', 'fade-in');
  } else {
    logoMini.classList.remove('visible', 'fade-in');
    logoMini.classList.add('hidden');
  }

  // ロゴ大（logo1）とコピー文（h1）の切り替え
  if (scrollY > 50) {
    logoFull.classList.add('fade-out');
    logoFull.classList.remove('fade-in');

    copyText.classList.add('fade-in');
    copyText.classList.remove('fade-out');
  } else {
    logoFull.classList.add('fade-in');
    logoFull.classList.remove('fade-out');

    copyText.classList.add('fade-out');
    copyText.classList.remove('fade-in');
  }
});