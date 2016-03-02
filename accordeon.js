;
(function() {
	"use strict";

	function Accordeon(options) {
		if (!(this instanceof Accordeon)) {
			return new Accordeon(options);
		}

		var self = this;

		this.addListeners = function() {
			var i = 0,
				elements = document.getElementsByClassName(options.itemClass);
			for (i; i < elements.length; i++) {
				elements[i].addEventListener('click', function() {
					var elementWithOpenClass,
						j = 0;
					if (this.classList.contains(options.openClass)) {
						this.classList.remove(options.openClass);
					} else {
						if (options.type === "usual") {
							elementWithOpenClass = document.getElementsByClassName(options.openClass);
							if (elementWithOpenClass.length > 0) {
								elementWithOpenClass[0].classList.remove(options.openClass);
							}
						}
						this.classList.add(options.openClass);
					}
				}, false);
			}
		}

		this.init = function() {
			this.addListeners();
		}
	}

	document.addEventListener("DOMContentLoaded", function() {
		var options = {
				itemClass: "item",
				openClass: "open",
				type: "usual", //can be usual or unusual - usual one open other close, unusual - can be open many tabs
			},
			accordeon = new Accordeon(options);
		accordeon.init();
	});
})();