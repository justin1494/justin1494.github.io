const contact = document.querySelectorAll(".contact-animation");

console.log(contact);

export const handleContactAnimations = (entries) => {
  if (entries[0].isIntersecting) {
    let tl = anime.timeline({
      duration: 600,
    });

    tl.add({
      targets: ".contact-underline",
      translateX: 950,
      skewX: -40,
      easing: "easeInOutQuad",
      translateY: 20,
    })
      .add({
        targets: ".contact-title h2",
        opacity: 1,
        translateY: 20,
      })
      .add(
        {
          targets: ".contact-title svg",
          opacity: 1,
          translateY: 20,
        },
        "-=600"
      )
      .add(
        {
          targets: contact,
          opacity: 1,
          translateY: 20,
          easing: "easeInOutQuad",
        },
        "-=600"
      )
      .add(
        {
          targets: ".contact-box img",
          opacity: 1,
          translateX: -100,
          easing: "easeInOutQuad",
        },
        "-=600"
      );
  }
};
