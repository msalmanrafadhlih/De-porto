// TOGGLE MENU
const hamburger = document.getElementById("hamburger");
const menuLayer = document.getElementById("menu");
const body = document.querySelector("body");
const hamburgerMenu = document.getElementById("hamburger-menu");
function openMenu() {
  menuLayer.classList.add("show");
  hamburger.style.display = "none";
  body.classList.add("menu-open");
}
function closeMenu() {
  menuLayer.classList.remove("show");
  hamburger.style.display = "flex";
  body.classList.remove("menu-open");
}
hamburger.addEventListener("click", openMenu);
hamburger.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.keyCode === 13) {
    openMenu();
  }
});
if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", closeMenu);
  hamburgerMenu.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      closeMenu();
    }
  });
}
document.addEventListener("keydown", (event) => {
  if (
    menuLayer.classList.contains("show") &&
    (event.key === "Escape" || event.keyCode === 27)
  ) {
    closeMenu();
  }
});

// DARK & LIGHT MODE
const themeBtn = document.getElementById("theme");
const toggleBtn = document.getElementById("toggle");

const prefersDark = true;

function setTheme(mode) {
  if (mode === "light") {
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
    themeBtn.src = "asset/img/Light.svg";
    toggleBtn.src = "asset/img/theme/Light.svg";
    themeBtn.alt = "Light theme btn";
    toggleBtn.alt = "Light theme toggle";
  } else {
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
    themeBtn.src = "asset/img/moon.svg";
    toggleBtn.src = "asset/img/theme/Darks.svg";
    themeBtn.alt = "Dark theme btn";
    toggleBtn.alt = "Dark theme toggle";
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}

themeBtn.addEventListener("click", toggleTheme);
themeBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") toggleTheme();
});

toggleBtn.addEventListener("click", toggleTheme);
toggleBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") toggleTheme();
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
});

// DROPDOWN
document.addEventListener("DOMContentLoaded", () => {
  const customSelectWrappers = document.querySelectorAll(
    ".custom-select-wrapper"
  );
  customSelectWrappers.forEach((wrapper) => {
    const selectElement = wrapper.querySelector(".hidden-select");
    const selectSelected = wrapper.querySelector(".select-selected");
    const selectItems = wrapper.querySelector(".select-items");
    const selectedTextSpan = selectSelected.querySelector(".selected-text");
    selectedTextSpan.textContent =
      selectElement.options[selectElement.selectedIndex].textContent;
    selectSelected.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllSelect(selectSelected);
      selectItems.classList.toggle("select-hide");
      selectSelected.classList.toggle("select-arrow-active");
    });
    selectItems.querySelectorAll("div").forEach((item) => {
      item.addEventListener("click", (e) => {
        const selectedValue = e.target.getAttribute("data-value");
        const selectedText = e.target.textContent;
        selectElement.value = selectedValue;
        selectedTextSpan.textContent = selectedText;
        selectItems.querySelectorAll(".same-as-selected").forEach((el) => {
          el.classList.remove("same-as-selected");
        });
        e.target.classList.add("same-as-selected");
        selectItems.classList.add("select-hide");
        selectSelected.classList.remove("select-arrow-active");
        const event = new Event("change");
        selectElement.dispatchEvent(event);
      });
    });
  });
  function closeAllSelect(elmnt) {
    const arrNo = [];
    const x = document.getElementsByClassName("select-items");
    const y = document.getElementsByClassName("select-selected");
    for (let i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (let i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  document.addEventListener("click", closeAllSelect);
});

// INPUT TEXTAREA KHUSUS NUMBER
document.getElementById("phone").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});


