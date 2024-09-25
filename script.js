let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

showSlide(currentIndex);

document.addEventListener("DOMContentLoaded", function () {
  const menuHamburguesa = document.querySelector(".menu-hamburguesa");
  const navMenu = document.querySelector("nav ul");
  const menuItems = document.querySelectorAll("nav ul > li");

  menuHamburguesa.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    menuItems.forEach((item) => {
      const submenu = item.querySelector("ul");
      if (submenu) {
        submenu.style.display = "none";
      }
    });
  });

  menuItems.forEach((item) => {
    const submenu = item.querySelector("ul");
    if (submenu) {
      item
        .querySelector(".menu-item")
        .addEventListener("click", function (event) {
          event.preventDefault();

          menuItems.forEach((otherItem) => {
            const otherSubmenu = otherItem.querySelector("ul");
            if (otherSubmenu && otherItem !== item) {
              otherSubmenu.style.display = "none";
            }
          });

          const isVisible = submenu.style.display === "block";
          submenu.style.display = isVisible ? "none" : "block";
        });
    }
  });

  document.addEventListener("click", function (event) {
    const isClickInsideMenu =
      navMenu.contains(event.target) || menuHamburguesa.contains(event.target);
    if (!isClickInsideMenu) {
      navMenu.classList.remove("active");
      menuItems.forEach((item) => {
        const submenu = item.querySelector("ul");
        if (submenu) {
          submenu.style.display = "none";
        }
      });
    }
  });
});
