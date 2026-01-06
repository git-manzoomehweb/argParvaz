document.addEventListener("DOMContentLoaded", function () {
  const isMobileSatrap = window.innerWidth <= 968;
  const requiredFiles = [
    isMobileSatrap ? "satrap.mob.ui.min.css" : "satrap.ui.min.css",
  ];

  function checkAllResourcesLoaded() {
    const resources = performance.getEntriesByType("resource");
    const loadedFiles = resources
      .map((res) => res.name.split("/").pop())
      .filter((name) => requiredFiles.includes(name));

    return requiredFiles.every((file) => loadedFiles.includes(file));
  }

  if (document.getElementById("search-box")) {
    function fetchEngine() {
      try {
        const xhrobj = new XMLHttpRequest();
        xhrobj.open("GET", "search-engine.bc");
        xhrobj.send();

        xhrobj.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            const container = document.getElementById("search-box");
            container.innerHTML = xhrobj.responseText;
            // placeHolders();

            const scripts = container.getElementsByTagName("script");
            for (let i = 0; i < scripts.length; i++) {
              const scriptTag = document.createElement("script");
              if (scripts[i].src) {
                scriptTag.src = scripts[i].src;
                scriptTag.async = false;
              } else {
                scriptTag.text = scripts[i].textContent;
              }
              document.head
                .appendChild(scriptTag)
                .parentNode.removeChild(scriptTag);
            }
          }
        };
      } catch (error) {
        console.error("مشکلی پیش آمده است. لطفا صبور باشید", error);
      }
    }

    function waitForFiles() {
      if (checkAllResourcesLoaded()) {
        fetchEngine();
      } else {
        setTimeout(waitForFiles, 500);
      }
    }

    waitForFiles();
  }
});

// ___________________________________

if (document.querySelectorAll(".swiper-3").length > 0)
  swiper = new Swiper(".swiper-3", {
    slidesPerView: 3,
    speed: 1000,
    centeredSlides: !1,
    spaceBetween: 24,
    grabCursor: !0,
    autoplay: { delay: 2500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 3, spaceBetween: 24 },
      768: { slidesPerView: 3, spaceBetween: 24 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
    },
  });
// ___________________________________

if (document.querySelectorAll(".swiper-2").length > 0)
  swiper = new Swiper(".swiper-2", {
    slidesPerView: 2,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 14,
    grabCursor: !0,
    autoplay: { delay: 3500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 14 },
      768: { slidesPerView: 2, spaceBetween: 14 },
      1024: { slidesPerView: 2, spaceBetween: 14 },
    },
  });
// ___________________________________
if (document.querySelectorAll(".swiper-tour").length > 0)
  swiper = new Swiper(".swiper-tour", {
    slidesPerView: 4,
    speed: 800,
    centeredSlides: !1,
    spaceBetween: 11,
    grabCursor: !0,
    autoplay: { delay: 5500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 4, spaceBetween: 11 },
      768: { slidesPerView: 4, spaceBetween: 11 },
      1024: { slidesPerView: 4, spaceBetween: 11 },
    },
  });
// ___________________________________

// ___________________________________

const headerMenu = document.querySelector(".header-menu");
const headerMenuClose = document.querySelector(".header-menu-close");
const bars3 = document.querySelector(".bars3");

if (window.innerWidth >= 1034) {
  headerMenuClose?.addEventListener("click", function () {
    headerMenu.style.visibility = "hidden";
    headerMenu.style.opacity = "0";
  });
  bars3?.addEventListener("click", function () {
    headerMenu.style.visibility = "visible";
    headerMenu.style.opacity = "1";
  });
} else {
  headerMenuClose?.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(-1024px)";
    document.querySelector("body").style.overflow = "";
  });
  bars3?.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(0)";
    document.querySelector("body").style.overflow = "hidden";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdowns = document.querySelectorAll(".toggle-dropdown");
  const dropdownIcons = document.querySelectorAll(".dropdown-icon");

  toggleDropdowns?.forEach((toggle, index) => {
    const submenu = toggle.nextElementSibling;
    const dropdownIcon = dropdownIcons[index];

    toggle.addEventListener("click", function () {
      dropdownIcon.classList.toggle("rotate-180");

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
        submenu.style.opacity = "0";
      } else {
        submenu.style.maxHeight = submenu.scrollHeight * 30 + "px";
        submenu.style.opacity = "1";
      }
    });
  });
});

const DropDownInFooter = document.querySelectorAll(".footer-dropDown");
DropDownInFooter?.forEach((el) => {
  el.addEventListener("click", () => {
    el.querySelector("button").classList.toggle("rotate-180");
    el.querySelector(".drop-down-list").classList.toggle("h-0");
    el.querySelector(".drop-down-list").classList.toggle("opacity-0");
    el.querySelector(".drop-down-list").classList.toggle("overflow-hidden");
  });
});
// ________
document.addEventListener("DOMContentLoaded", function () {
  const headerB = document.querySelector(".header-top");
  if (!headerB) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
      headerB.classList.add("blur-header");
    } else {
      headerB.classList.remove("blur-header");
    }
  });
});

// ____________________________
// ____________________________
(function () {
  const faqContainer = document.querySelector(".faq-container");
  if (!faqContainer) return; // جلوگیری از ارور در صفحات دیگر

  const faqBoxes = faqContainer.querySelectorAll(".faq-box");

  faqBoxes.forEach((box) => {
    const answer = box.querySelector(".answer");
    const chevron = box.querySelector(".chevron");

    if (!answer) return;

    // مقدار اولیه امن
    answer.style.maxHeight = "0px";
    answer.style.opacity = "0";

    box.addEventListener("click", () => {
      const isActive = box.classList.contains("active");

      // بستن همه FAQ ها
      faqBoxes.forEach((item) => {
        const itemAnswer = item.querySelector(".answer");
        const itemChevron = item.querySelector(".chevron");

        item.classList.remove("active");

        if (itemAnswer) {
          itemAnswer.style.maxHeight = "0px";
          itemAnswer.style.opacity = "0";
        }

        if (itemChevron) {
          itemChevron.style.transform = "rotate(0deg)";
        }
      });

      if (!isActive) {
        box.classList.add("active");

        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = "1";

        if (chevron) {
          chevron.style.transform = "rotate(45deg)";
        }
      }
    });
  });
})();

// ____________________________
// ____________________________
(function () {
  const openBtn = document.querySelector(".contact-btn");
  const popup = document.querySelector(".contact-popup");
  const closeBtn = document.querySelector("#close-contact");
  const backdrop = popup ? popup.querySelector("span") : null;
  const modalBox = popup ? popup.querySelector("div.w-\\[500px\\]") : null;

  if (!openBtn || !popup || !modalBox) return; // جلوگیری کامل از ارور

  // وضعیت اولیه امن
  popup.classList.add("hidden");
  popup.classList.remove("flex");
  popup.style.opacity = "0";

  modalBox.style.transform = "scale(0.9)";
  modalBox.style.opacity = "0";
  modalBox.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
  popup.style.transition = "opacity 0.3s ease";

  function openPopup() {
    popup.classList.remove("hidden");
    popup.classList.add("flex");

    requestAnimationFrame(() => {
      popup.style.opacity = "1";
      modalBox.style.transform = "scale(1)";
      modalBox.style.opacity = "1";
    });
  }

  function closePopup() {
    popup.style.opacity = "0";
    modalBox.style.transform = "scale(0.9)";
    modalBox.style.opacity = "0";

    setTimeout(() => {
      popup.classList.add("hidden");
      popup.classList.remove("flex");
    }, 350);
  }

  openBtn.addEventListener("click", openPopup);
  closeBtn && closeBtn.addEventListener("click", closePopup);

  backdrop && backdrop.addEventListener("click", closePopup);
})();

// ____________________________
// ____________________________
if (document.querySelector(".show-more-text")) {
  const moreBtn = document.querySelectorAll(".show-more-text");
  moreBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const paragraph = btn.parentElement.querySelector(".paragraph");
      if (paragraph.classList.contains("line-clamp-6")) {
        paragraph.classList.remove("line-clamp-6");
        btn.innerHTML = "بستن";
      } else {
        paragraph.classList.add("line-clamp-6");
        btn.innerHTML = "بیشتر بخوانید";
      }
    });
  });
}
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
// ____________________________
