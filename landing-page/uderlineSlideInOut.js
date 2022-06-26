const skillsUnderline = document.querySelector(".skills-underline");
const projectsUnderline = document.querySelector(".projects-underline");
const skillsTitle = document.querySelector(".skills-title");
const skillsSection = document.querySelector(".skills");
const projectsSection = document.querySelector(".projects");
const skillsH1 = skillsTitle.children[0];
const skillsImg = skillsTitle.children[1];

const handleAboutAnimations = () => {
  let tlAbout = anime.timeline({
    duration: 800,
  });

  tlAbout
    .add({
      targets: "nav",
      opacity: 1,
      translateY: 60,
      easing: "spring",
    })
    .add(
      {
        targets: ".about-img",
        opacity: 1,
        translateX: 400,
        easing: "linear",
      },
      "-=800"
    )
    .add(
      {
        targets: ".about h1",
        opacity: 1,
        translateY: 40,
        easing: "linear",
      },
      "-=800"
    );
};

const handleSkillsAnimation = (entries) => {
  if (entries[0].isIntersecting) {
    let tl = anime.timeline({
      duration: 800,
    });

    tl.add({
      targets: skillsUnderline,
      translateX: 970,
      skewX: -40,
      easing: "easeInOutQuad",
      translateY: 20,
    })
      .add({
        targets: skillsH1,
        opacity: 1,
        translateY: 20,
      })
      .add(
        {
          targets: skillsImg,
          opacity: 1,
          translateY: 20,
        },
        "-=800"
      )
      .add(
        {
          targets: ".skills-display img",
          opacity: 1,
          translateX: 100,
          easing: "easeInOutQuad",
        },
        "-=800"
      )
      .add(
        {
          targets: ".fa-brands",

          opacity: 1,

          delay: function (el, i, l) {
            return i * 100;
          },
          endDelay: function (el, i, l) {
            return (l - i) * 100;
          },
        },
        "-=600"
      );
  } else {
    console.log("nie widać");
  }
};

const observerSkills = new IntersectionObserver(
  (entries) => {
    handleSkillsAnimation(entries);
  },
  { threshold: 0.9 }
);

const observerProjects = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      let tl = anime.timeline({
        duration: 800,
      });

      tl.add({
        targets: projectsUnderline,
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
          "-=800"
        );
    }
  },
  {
    threshold: 0.5,
  }
);

observerSkills.observe(skillsSection);
observerProjects.observe(projectsSection);

handleAboutAnimations();
