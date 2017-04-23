
let button = document.querySelector('#addGood'),
    exclusiveDiv = document.querySelector('.check'),
    goods = document.querySelector('.innerGoods'),
    order_list = document.querySelector('.forsum');
console.log(order_list);

exclusiveDiv.onclick = function () {
    if (exclusiveDiv.value === 'Эксклюзив') {
        document.querySelector('#exclusive').removeAttribute('class');
    } else {
        if (document.querySelector('#exclusive').hasAttribute('class')) {return} else {
            document.querySelector('#exclusive').setAttribute('class', 'exclusiveGood');
        }
    }
};
console.log(document.querySelector('.forOrderList.forsum'));
button.addEventListener('click', function () {
    let tmp = goods.cloneNode(true);
    tmp.lastElementChild.value = 'Удалить товар';
    tmp.lastElementChild.addEventListener('click', function () {
        document.querySelector('.forOrderList').removeChild(tmp);
    });
    document.querySelector('.forOrderList').appendChild(tmp);

});

document.querySelector('#count').addEventListener('click', function () {
    let tmp = document.querySelectorAll('.forOrderList input.forsum');
    let sum = 0;
    for (let i = 0; i < tmp.length; i += 2) {
        sum += tmp[i].value * tmp[i+1].value;
    }
    if (sum === 1000) {
        sum = sum * 0.93;
    }
    document.querySelector('#count').value = 'Сумма = ' + sum;
});

/*document.querySelector('.forOrderList.forsum').onblur = function () {
    let tmp = document.querySelectorAll('.forOrderList input.forsum');
    let sum = 0;
    for (let i = 0; i < tmp.length; i += 2) {
        sum += tmp[i].value * tmp[i+1].value;
    }
    if (sum === 1000) {
        sum = sum * 0.93;
    }
    document.querySelector('#count').value = 'Сумма = ' + sum;
}*/


