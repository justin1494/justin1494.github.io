const searchBtn = document.querySelector(".search");
const searchInput = document.querySelector(".search-input");

const inputSlide = () => {
  searchInput.value = "";

  searchInput.classList.toggle("active");
  setTimeout((e) => {
    if (searchInput.classList.contains("active")) {
      searchInput.focus();
    }
  }, 500);
};

searchBtn.addEventListener("click", inputSlide);

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchInput.classList.remove("active");
  }
});
