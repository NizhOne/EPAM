/*возникла проблема с поиском текстовых узлов + код нужно оптимизировать*/
let arr = {};

function visiting(root) {
    console.log(root);
    if (root.nodeName === '#document') return arr;

    if (root.firstElementChild === null) {
        root.setAttribute('visited', 'black');
        if (arr[root.nodeName] === undefined) {
            arr[root.nodeName] = 1;
        } else {
            arr[root.nodeName]++;
        }
        if (root.nextElementSibling === null) {
            visiting(root.parentNode);
        } else {
            visiting(root.nextElementSibling);
        }
    } else if (root.firstElementChild.hasAttribute('visited')) {
        root.setAttribute('visited', 'black');
        if (arr[root.nodeName] === undefined) {
            arr[root.nodeName] = 1;
        } else {
            arr[root.nodeName]++;
        }
        if (root.nextElementSibling === null) {
            visiting(root.parentNode);
        } else {
            visiting(root.nextElementSibling);
        }

    } else {
        visiting(root.firstElementChild);
    }

}

visiting(document.querySelector('body'));
