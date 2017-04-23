
var notSortedTowns = ['Винница', 'Балановка', 'Ладыжин', 'Луцк', 'Владимир-Волынский', 'Ковель', 'Нововолынск', 'Днепропетровск', 'Булаховка', 'Днепродзержинск', 'Жёлтые Воды', 'Зеленодольск', 'Кривой Рог', 'Кринички', 'Марганец', 'Никополь', 'Новомосковск', 'Павлоград', 'Житомир', 'Андреевка', 'Бердичев', 'Коростень', 'Новоград-Волынский', 'Ужгород', 'Берегово', 'Виноградов', 'Иршава', 'Мукачево', 'Рахов', 'Свалява', 'Тячев Хуст', 'Запорожье', 'Бердянск', 'Днепрорудное', 'Камыш-Заря', 'Мелитополь', 'Токмак', 'Энергодар', 'Ивано-Франковск', 'Бурштын', 'Калуш', 'Коломыя', 'Белая Церковь', 'Борисполь', 'Бровары', 'Вышгород', 'Припять'];

function getRandomNumber() {
    let min = 0,
        max = notSortedTowns.length - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFirstChar(word) {
    return word.charAt(0);
}

function getLastChar(word) {
    let tmp = word.charAt(word.length - 1);
    if (tmp !== 'ь' && tmp !== 'ъ' && tmp !== 'ы') {
        return word.charAt(word.length - 1);
    } else {
        return word.charAt(word.length - 2);
    }
}

function findByFirstChar(char) {
    for (let i = 0; i < notSortedTowns.length; i++) {
        if (getFirstChar(notSortedTowns[i]) === char) {
            return i;
        } else {
            return getRandomNumber();
        }
    }
}

function mySort(notSortedTowns) {
    var newArray = [],
        lastChar;

    if (newArray.length === 0) {
        var tmp = getRandomNumber();
        newArray[newArray.length] = this.notSortedTowns[tmp];
        lastChar = getLastChar(this.notSortedTowns[tmp]);
        delete this.notSortedTowns[tmp];
    }

    while (this.notSortedTowns.length !== 0) {
        newArray[newArray.length] = this.notSortedTowns[findByFirstChar(lastChar)];
        lastChar = getLastChar(this.notSortedTowns[findByFirstChar(lastChar)]);
        delete this.notSortedTowns[this.notSortedTowns[findByFirstChar(lastChar)]];
    }
    console.log(newArray);
    return newArray;
}

mySort();