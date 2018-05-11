function getElementHeight(element) {
	const style = element.currentStyle || window.getComputedStyle(element)
	const height = element.offsetHeight
	const marginTop = style.marginTop !== ('auto' || '') ? parseFloat(style.marginTop) : 0
	const marginBottom = style.marginBottom !== ('auto' || '') ? parseFloat(style.marginBottom) : 0

	return height + marginTop + marginBottom
}

function getElementFromTop(element) {
	var distance = 0;

	if (element.offsetParent) {
		do {
			distance += element.offsetTop
			element = element.offsetParent
		} while (element)
	}

	return distance < 0 ? 0 : distance
}

var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

export {
	getElementHeight,
	getElementFromTop,
	forEach
}