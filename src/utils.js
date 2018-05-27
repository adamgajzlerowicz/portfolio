
function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition
}

/* eslint-disable-next-line*/
const scrollToView = id => window.scroll({ top: getPosition(document.getElementById(id)), behavior: 'smooth' });

export { scrollToView };
