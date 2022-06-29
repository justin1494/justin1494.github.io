export const handleHeroAnimations = () => {
  let tlHero = anime.timeline({
    duration: 800,
  });

  tlHero
    .add({
      targets: "nav",
      opacity: 1,
      translateY: 60,
      easing: "spring",
    })
    .add(
      {
        targets: ".hero-img",
        opacity: 1,
        translateX: 400,
        easing: "spring",
      },
      "-=800"
    )
    .add(
      {
        targets: ".hero h1",
        opacity: 1,
        translateY: 40,
        easing: "spring",
      },
      "-=1600"
    );
};
