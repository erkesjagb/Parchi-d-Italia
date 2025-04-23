gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll(".image");

images.forEach((img, index) => {
  ScrollTrigger.create({
    trigger: img,
    start: "top center",
    end: "bottom center",
    onEnter: () => setActiveImage(index),
    onEnterBack: () => setActiveImage(index),
  });
});

function setActiveImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}
    