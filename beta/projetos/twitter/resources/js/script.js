function loadForm(){
	if(document.body.id == 'cadastro') {
		document.getElementById('ddd').focus();

		eventListener(document.getElementById('ddd'), 'keyup', focus);
	}
}

function eventListener(instance, eventName, listener) {
    var listenerFn = listener;
    if (instance.addEventListener) {
        instance.addEventListener(eventName, listenerFn, false);
    } else if (instance.attachEvent) {
        listenerFn = function() {
            listener(window.event);
        };
        instance.attachEvent("on" + eventName, listenerFn);
    } else {
        throw new Error("Event registration not supported");
    }
    return true;
}

function numbers(e) {
	var key = null;
	var allow = {8: 1, 13: 1, 27: 1, 46: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 46: 1};

	if(window.event) {
		key = e.keyCode;
	}
	else if(e.which) {
		key = e.which;
	}

	return allow[key] || (key >= 96 && key <= 105) || /\d/.test(String.fromCharCode(key));

};

function focus(){
	if(document.getElementById('ddd').value.length == 2) {
		try {
			document.getElementById('celular').focus();
		}
		catch (e) { }
	}
};