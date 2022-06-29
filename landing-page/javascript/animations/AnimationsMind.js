import { handleHeroAnimations } from "./handleHeroAnimation.js";
import { handleSkillsAnimation } from "./handleSkillsAnimation.js";
import { handleProjecAnimations } from "./handleProjectsAnimation.js";
import { handleContactAnimations } from "./handleContactAnimations.js";

const aboutSection = document.querySelector(".about");
const skillsSection = document.querySelector(".skills");
const projectsSection = document.querySelector(".projects");
const contactSection = document.querySelector(".contact");
const divUnderProgramming = document.querySelector(".under-programming");

const handleAboutAnimation = (entries) => {
  let aboutInterval = setInterval(() => {
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
      }
      // it clears the Intercal when the was code is ran
      clearInterval(aboutInterval);
    }
  }, 100);
};

const observerSkills = new IntersectionObserver(
  (entries) => {
    handleSkillsAnimation(entries);
  },
  { threshold: 0.6 }
);

const observerAbout = new IntersectionObserver(
  (entries) => {
    handleAboutAnimation(entries);
  },
  { threshold: 0.6 }
);

const observerProjects = new IntersectionObserver(
  (entries) => {
    handleProjecAnimations(entries);
  },
  {
    threshold: 0.5,
  }
);

const observerContact = new IntersectionObserver(
  (entries) => {
    handleContactAnimations(entries);
  },
  {
    threshold: 0.6,
  }
);

observerAbout.observe(aboutSection);
observerSkills.observe(skillsSection);
observerProjects.observe(projectsSection);
observerContact.observe(contactSection);

handleHeroAnimations();
