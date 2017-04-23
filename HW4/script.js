

class Ball {

    constructor(canvas) {
        let elem = document.createElement('div'),
            random = this.getRandomSize(),
            start = 0;
        elem.className = 'circle';
        elem.style.width = random + 'px';
        elem.style.height = random + 'px';
        elem.style.background = '#' + this.getRandomColor();
        elem.style.top = 0 + 'px';
        elem.style.left = 0 + 'px';
        canvas.appendChild(elem);
        this.myMove(elem);
    }

    getRandomColor() {
        let min = 0,
            max = 16777215,
            random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random.toString(16);
    }

    getRandomSize() {
        let min = 50,
            max = 200;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    myMove(elem) {
        let start = 0;
        setInterval(function () {
            console.log(elem.style.width);
            if (((parseInt(elem.style.top) + parseInt(elem.style.width) >= 700)) && ((parseInt(elem.style.left) + parseInt(elem.style.width) >= 700))) {
                elem.style.bottom = 0;
                elem.style.right = 0;
                elem.style.top='';
                elem.style.left='';
                start = 0;
            } else if ((parseInt(elem.style.bottom) + parseInt(elem.style.width) >= 700) && (parseInt(elem.style.right) + parseInt(elem.style.width) >= 700)) {
                elem.style.bottom='';
                elem.style.right='';
                elem.style.top = 0;
                elem.style.left = 0;
                start = 0;

            } else if (parseInt(elem.style.bottom) + parseInt(elem.style.width) < 700 && (parseInt(elem.style.right) + parseInt(elem.style.width) < 700)) {
                start += 10;
                elem.style.bottom = start + 'px';
                elem.style.right = start + 'px';
            }else if (parseInt(elem.style.top) + parseInt(elem.style.width) < 700 && (parseInt(elem.style.left) + parseInt(elem.style.width) < 700)) {
                start += 10;
                elem.style.top = start + 'px';
                elem.style.left = start + 'px';
            }


            }
            , 50, elem, start);
    }

}


let canvas = document.querySelector('.canvas'),
    counter = 0;
function help(canvas) {
    if (counter === 20) return;
    new Ball(canvas);
    counter++;
}
setInterval(help, 5000, canvas);