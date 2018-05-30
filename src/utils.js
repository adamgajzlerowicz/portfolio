/* global window, document */

const getPosition = element => {
  let el = element;
  let yPosition = 0;

  while (el) {
    // eslint-disable-next-line no-mixed-operators
    yPosition += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }

  return yPosition;
};

const scrollToView = id =>
  window.scroll({
    top: getPosition(document.getElementById(id)),
    behavior: 'smooth'
  });

const checkIfMobile = () =>
  Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768;

export { scrollToView, checkIfMobile, getPosition };
