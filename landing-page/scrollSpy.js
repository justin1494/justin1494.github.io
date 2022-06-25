const menuItems = document.querySelectorAll(".nav-item");
const scrollSpySections = document.querySelectorAll("section");
const lastSection = document.querySelector(".nav-item:last-of-type");

const handleScrollSpy = () => {
  const sections = [];

  scrollSpySections.forEach((section) => {
    // console.log(window.scrollY);
    // wartość scrolla

    // console.log(section.offsetTop);
    // odległość danej sekcji od górnej krawędzi przeglądarki

    // console.log(section.offsetHeight);
    // wysokość każdej z sekcji

    if (window.scrollY <= section.offsetTop + section.offsetHeight - 93) {
      sections.push(section);

      const activeSection = document.querySelector(`[href*=${sections[0].id}`);

      menuItems.forEach((item) => item.classList.remove("active"));

      activeSection.classList.add("active");
    }
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      menuItems.forEach((item) => item.classList.remove("active"));

      lastSection.classList.add("active");
    }
  });
};

window.addEventListener("scroll", handleScrollSpy);
