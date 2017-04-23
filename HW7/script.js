
window.onload = function () {
    document.body.onmousemove = function (e) {
        e = e || event;
        target = e.target || e.srcElement;

        if (target.className === "dropable") {
            drag(target);
        } else {
            return;
        }
    }
};

function drag(target) {

    target.onmousedown = function(e) {

        let coords = getCoords(target),
            shiftX = e.pageX - coords.left,
            shiftY = e.pageY - coords.top;

        target.style.position = 'absolute';
        document.body.appendChild(target);
        moveAt(e);

        target.style.zIndex = 1000;

        function moveAt(e) {
            target.style.left = e.pageX - shiftX + 'px';
            target.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function(e) {
            moveAt(e);
        };

        target.onmouseup = function() {
            document.onmousemove = null;
            target.onmouseup = null;
        };

    };

    target.ondragstart = function() {
        return false;
    };
}

function getCoords(elem) {

    let box = elem.getBoundingClientRect(),
        body = document.body,
        docEl = document.documentElement,
        scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop,
        scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
        clientTop = docEl.clientTop || body.clientTop || 0,
        clientLeft = docEl.clientLeft || body.clientLeft || 0,
        top  = box.top +  scrollTop - clientTop,
        left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}