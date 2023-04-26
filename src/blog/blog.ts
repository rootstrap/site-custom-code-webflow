const blogHeroElement = document.getElementById("blog-hero") as HTMLElement;
const blogHeaderElement = document.getElementById("blog-header") as HTMLElement;

const yellowHeaderAffectedElements = document.querySelectorAll(".cc-yellow-header");

const observer = new IntersectionObserver(onHeroDesintersect, {
  root: null,
  threshold: 0,
});

function onHeroDesintersect (entries) {
  const { isIntersecting } = entries[0];

  if(isIntersecting) {
    blogHeaderElement.classList.add("cc-yellow-header");
    yellowHeaderAffectedElements.forEach(element => {
      element.classList.add("cc-yellow-header");
    });
  } else {
    blogHeaderElement.classList.remove("cc-yellow-header");
    yellowHeaderAffectedElements.forEach(element => {
      element.classList.remove("cc-yellow-header");
    });
  }
};

observer.observe(blogHeroElement);
