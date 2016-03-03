;
(function() {
    "use strict";

    function Accordeon(options) {
        if (!(this instanceof Accordeon)) {
            return new Accordeon(options);
        }

        var self = this,
            openElement = document.querySelector('.' + options.openClass);

        this.addListeners = function() {
            document.querySelector('.' + options.bodyClass).addEventListener('click', function(e) {
                if (e.target.classList.contains(options.clickableElementClass)) {
                    if (e.target.parentNode.classList.contains(options.openClass)) {
                        e.target.parentNode.classList.remove(options.openClass);
                    } else {
                        if (options.type === "usual") {
                            if (openElement) {
                                openElement.classList.remove(options.openClass);
                            }
                        }
                        openElement = e.target.parentNode;
                        openElement.classList.add(options.openClass);
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