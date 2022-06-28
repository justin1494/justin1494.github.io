let pageLineSvg = document.querySelector(".page-line");

const pageLinePath = pageLineSvg.childNodes[1];

let pathLength = pageLinePath.getTotalLength();

pageLinePath.style.strokeDasharray = pathLength + " " + pathLength;

pageLinePath.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
  // what % down is it?
  let scrollPercantage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  // Length to offset the dashes
  let drawnLength = pathLength * scrollPercantage;

  // Draw in reverse
  pageLinePath.style.strokeDashoffset = pathLength - drawnLength;
});
