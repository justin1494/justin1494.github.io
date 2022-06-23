const counterItems = document.querySelectorAll(".counter");
const counterBox = document.querySelector(".counter-box");

const options = {
  rootMargin: "-250px",
};

const startCounter = (entry) => {
  if (entry[0].isIntersecting) {
    counterItems.forEach((item) => {
      const updateCounter = () => {
        const finalNumber = item.dataset.number;
        const value = parseInt(item.textContent);
        const speed = finalNumber / 200;

        if (value < finalNumber) {
          item.textContent = `${Math.floor(value + speed)}`;
          setTimeout(updateCounter, 1);
        } else {
          item.textContent = finalNumber;
        }
      };

      updateCounter();
    });
  }
};

const observer = new IntersectionObserver(startCounter, options);
observer.observe(counterBox);
