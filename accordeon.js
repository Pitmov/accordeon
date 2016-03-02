;
(function() {
	"use strict";

	function Accordeon(options) {
		if (!(this instanceof Accordeon)) {
			return new Accordeon(options);
		}

		var self = this;

		this.addListeners = function() {
			document.getElementsByClassName(options.bodyClass)[0].addEventListener('click', function(e) {
				if (e.target.classList.contains(options.clickableElementClass)) {
					var elementWithOpenClass;
					if (e.target.parentNode.classList.contains(options.openClass)) {
						e.target.parentNode.classList.remove(options.openClass);
					} else {
						if (options.type === "usual") {
							elementWithOpenClass = document.getElementsByClassName(options.openClass);
							if (elementWithOpenClass.length > 0) {
								elementWithOpenClass[0].classList.remove(options.openClass);
							}
						}
						e.target.parentNode.classList.add(options.openClass);
					}
				}
			}, true);
		}

		this.init = function() {
			this.addListeners();
		}
	}

	document.addEventListener("DOMContentLoaded", function() {
		var options = {
				openClass: "open",
				bodyClass: "body",
				clickableElementClass: "item_title",
				type: "usual", //can be usual or unusual - usual one open other close, unusual - can be open many tabs
			},
			accordeon = new Accordeon(options);
		accordeon.init();
	});
})();