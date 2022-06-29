export const handleSkillsAnimation = (entries) => {
  if (entries[0].isIntersecting) {
    let tl = anime.timeline({
      duration: 600,
    });

    tl.add({
      targets: ".skills-underline",
      translateX: 970,
      skewX: -40,
      easing: "easeInOutQuad",
      translateY: 20,
    })
      .add({
        targets: ".skills-title h2",
        opacity: 1,
        translateY: 20,
      })
      .add(
        {
          targets: ".skills-title img",
          opacity: 1,
          translateY: 20,
        },
        "-=600"
      )
      .add(
        {
          targets: ".skills-display img",
          opacity: 1,
          translateX: 100,
          easing: "easeInOutQuad",
        },
        "-=600"
      )
      .add(
        {
          targets: ".fa-brands",
          opacity: 1,
          delay: function (el, i, l) {
            return i * 60;
          },
          endDelay: function (el, i, l) {
            return (l - i) * 60;
          },
        },
        "-=600"
      );
  }
};
