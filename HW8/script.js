/*
* проверка правильности введения пользователем
* проигрышь компьютера
* проигрышь игрока
* ресет инпута
* правка стилей
* конец игры, все value = false
* */
let notSortedTowns = ['Винница', 'Ялта', 'Балановка', 'Ладыжин', 'Луцк', 'Владимир-Волынский', 'Ковель', 'Нововолынск', 'Днепропетровск', 'Булаховка', 'Днепродзержинск', 'Жёлтые Воды', 'Зеленодольск', 'Кривой Рог', 'Кринички', 'Марганец', 'Никополь', 'Новомосковск', 'Павлоград', 'Житомир', 'Андреевка', 'Бердичев', 'Коростень', 'Новоград-Волынский', 'Ужгород', 'Берегово', 'Виноградов', 'Иршава', 'Мукачево', 'Рахов', 'Свалява', 'Тячев Хуст', 'Запорожье', 'Бердянск', 'Днепрорудное', 'Камыш-Заря', 'Мелитополь', 'Токмак', 'Энергодар', 'Ивано-Франковск', 'Бурштын', 'Калуш', 'Коломыя', 'Белая Церковь', 'Борисполь', 'Бровары', 'Вышгород', 'Припять'],
    gameArr = [],
    addButton = document.querySelector('#add'),
    input = document.querySelector('#addTown input'),
    formForOutput = document.querySelector('#tableForTowns');

window.onload = function () {                                        //инициализируюший метод, проверяет localStorage и заполняет, если необходимо
    if (localStorage.length === 0) {
        for (let i = 0; i < notSortedTowns.length; i++) {
            localStorage.setItem(notSortedTowns[i], false);
        }
    }
};

addButton.onclick = function () {                                           //метод добавляет слово пользователя и вызывает метод добавляющий слово компьютера + проверка правильности введения пользователем
    if (input.value === "") {
        return;
    } else if (gameArr.length === 0){
        gameArr.push(input.value);
        addTown(input.value);
        searchByLocalStorage(getLastChar(input.value));
        input.value = '';
    }


};

function addTown(word) {
    let input = document.createElement('input');
    input.setAttribute('disabled', 'disabled');
    input.setAttribute('type', 'text');
    input.setAttribute('value', word);
    formForOutput.appendChild(input);
}

function getLastChar(word) {                                //метод для выбора последнего символа
    let tmp = word.charAt(word.length - 1);
    if (tmp === 'ь' || tmp === 'ъ') {
        console.log(word.charAt(word.length - 2));
        return word.charAt(word.length - 2);
    } else {
        return word.charAt(word.length - 1);
    }
}

function getFirstChar(word) {                               //для выбора первого символа
    return word.charAt(0);
}

function searchByLocalStorage(letter) {                             //ищет в localStorage свободное слово и добавляет в игровой массив
    for (let value in localStorage) {                               //+возврат слова
        if (getFirstChar(value).toUpperCase() === letter.toUpperCase()) {
            if (localStorage[value] === 'false') {
                gameArr.push(value);
                addTown(value);
                localStorage[value] = 'true';
                break;
            }
        }
    }
}

/*реализовать оконание игры добавление новых слов в localStorage*/
