const headerContent = document.querySelector(".header__content");
const headerWidth = headerContent.offsetWidth;
const headerHeight = headerContent.offsetHeight;

const headerMover = () => {
  const maxTop = window.innerHeight - headerHeight;
  const maxLeft = window.innerWidth - headerWidth;

  headerContent.style.top = `${newNumb(0, maxTop)}px`;
  headerContent.style.left = `${newNumb(0, maxLeft)}px`;
  console.log("mouse");
};
headerContent.style.transition = 'top 0.5s ease, left 0.5s ease';
headerContent.addEventListener("mouseover", headerMover);

const newNumb = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
