// ScrollFade 0.1

var fadeElements = document.getElementsByClassName('scrollFade');
var info_layer_container = document.getElementById('info-layer-container-id')

function scrollFade() {
	var viewportBottom = info_layer_container.scrollTop + info_layer_container.clientHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = info_layer_container.clientHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}


info_layer_container.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});