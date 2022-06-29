export const handleProjecAnimations = (entries) => {
  if (entries[0].isIntersecting) {
    let tl = anime.timeline({
      duration: 600,
    });

    tl.add({
      targets: ".projects-underline",
      translateX: -930,
      skewX: -40,
      easing: "easeInOutQuad",
      translateY: 20,
    })
      .add({
        targets: ".projects-title h2",
        opacity: 1,
        translateY: 20,
      })
      .add(
        {
          targets: ".projects-title img",
          opacity: 1,
          translateY: 20,
        },
        "-=600"
      )
      .add(
        {
          targets: ".app-item",
          opacity: 1,
          translateY: 10,
          skew: -10,
          delay: function (el, i, l) {
            return i * 10;
          },
          endDelay: function (el, i, l) {
            return (l - i) * 10;
          },
          duration: 100,
        },
        "-=600"
      )
      .add(
        {
          targets: ".component-item",
          opacity: 1,
          translateY: 10,
          skew: -10,
          delay: function (el, i, l) {
            return i * 10;
          },
          endDelay: function (el, i, l) {
            return (l - i) * 10;
          },
          duration: 100,
        },
        "-=600"
      );
  }
};
