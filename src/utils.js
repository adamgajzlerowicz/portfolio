/* eslint-disable */

const getPosition = (element) => {
  let yPosition = 0;

  while (element) {
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }

  return yPosition;
};

const scrollToView = id => window.scroll({ top: getPosition(document.getElementById(id)), behavior: 'smooth' });

const checkIfMobile = () => Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768;

/* eslint-enable */

export { scrollToView, checkIfMobile };
