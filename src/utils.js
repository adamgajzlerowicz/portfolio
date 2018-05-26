/* eslint-disable-next-line */
const scrollToView = id => window.scroll({ top: document.getElementById(id).offsetTop, behavior: 'smooth' });

export { scrollToView };
