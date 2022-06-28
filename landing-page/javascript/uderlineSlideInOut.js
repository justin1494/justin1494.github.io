const skillsUnderline = document.querySelector(".skills-underline");
const projectsUnderline = document.querySelector(".projects-underline");
const skillsTitle = document.querySelector(".skills-title");
const aboutTitle = document.querySelector(".about-title");
const aboutSection = document.querySelector(".about");
const divUnderProgramming = document.querySelector(".under-programming");
const skillsSection = document.querySelector(".skills");
const projectsSection = document.querySelector(".projects");
const figmaBrand = document.querySelector(".fa-figma");
const skillsh2 = skillsTitle.children[0];
const skillsImg = skillsTitle.children[1];

console.log(aboutTitle.children);

const handleHeroAnimations = () => {
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

const handleAboutAnimation = (entries) => {
  let aboutInterval = setInterval(() => {
    console.log("interwał działa");
    // it runs the code only after the user scroll down, by the amount of 20px
    if (window.scrollY > 20) {
      console.log("działa");
      if (entries[0].isIntersecting) {
        let tl = anime.timeline({
          duration: 600,
        });

        tl.add({
          targets: ".about-underline",
          opacity: 1,
          translateX: 940,
          skewX: -40,
          easing: "easeInOutQuad",
          translateY: 20,
        })
          .add({
            targets: ".about-title h2",
            opacity: 1,
            translateY: 20,
          })
          .add(
            {
              targets: ".about-title img",
              opacity: 1,
              translateY: 20,
            },
            "-=600"
          )
          .add(
            {
              targets: ".chemistry img",
              opacity: 1,
            },
            "-=600"
          )
          .add(
            {
              targets: ".under-chemistry",
              opacity: 1,
              translateX: 300,
            },
            "-=600"
          )
          .add(
            {
              targets: ".chemistry-text",
              opacity: 1,
            },
            "-=600"
          )
          .add(
            {
              targets: ".programming img",
              opacity: 1,
            },
            "-=600"
          )
          .add(
            {
              targets: ".under-programming",
              opacity: 1,
              translateX: -300,
            },
            "-=600"
          )
          .add(
            {
              targets: ".programming-text",
              opacity: 1,
            },
            "-=600"
          );
      }
      if (divUnderProgramming.style.opacity == 1) {
        console.log("początek animacji");
        observerAbout.unobserve(aboutSection);
        // clearInterval(aboutInterval);
      }
      // it clears the Intercal when the was code is ran
      clearInterval(aboutInterval);
    }
  }, 100);
};

const handleSkillsAnimation = (entries) => {
  if (entries[0].isIntersecting) {
    let tl = anime.timeline({
      duration: 600,
    });

    tl.add({
      targets: skillsUnderline,
      translateX: 970,
      skewX: -40,
      easing: "easeInOutQuad",
      translateY: 20,
    })
      .add({
        targets: skillsh2,
        opacity: 1,
        translateY: 20,
      })
      .add(
        {
          targets: skillsImg,
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

const observerSkills = new IntersectionObserver(
  (entries) => {
    handleSkillsAnimation(entries);
  },
  { threshold: 0.7 }
);

const observerAbout = new IntersectionObserver(
  (entries) => {
    handleAboutAnimation(entries);
  },
  { threshold: 0.7 }
);

const observerProjects = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      let tl = anime.timeline({
        duration: 600,
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
          "-=600"
        )
        .add(
          {
            targets: ".app-item",
            opacity: 1,
            translateY: 10,
            skew: -10,
            delay: function (el, i, l) {
              return i * 60;
            },
            endDelay: function (el, i, l) {
              return (l - i) * 60;
            },
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
              return i * 60;
            },
            endDelay: function (el, i, l) {
              return (l - i) * 60;
            },
          },
          "-=1200"
        );
    }
  },
  {
    threshold: 0.7,
  }
);

observerSkills.observe(skillsSection);
observerProjects.observe(projectsSection);
observerAbout.observe(aboutSection);

handleHeroAnimations();
