
class MySort {
    constructor(oldArray) {
        this.oldArray = oldArray;
        console.log(this.oldArray.length);
        this.newArray = [];
    };

    getNewArray() {
        console.log(this.newArray);
    };

    getRandomNumber() {
        let min = 0,
            max = this.oldArray.length - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    getFirstChar(word) {
        return word.charAt(0);
    };

    getLastChar(word) {
        let tmp = word.charAt(word.length - 1);
        if (tmp === 'ь' || tmp === 'ъ' || tmp === 'ы' || tmp === 'й') {
            console.log(word.charAt(word.length - 2));
            return word.charAt(word.length - 2);
        } else {
            return word.charAt(word.length - 1);
        }
    };

    findByFirstChar(char) {
        let a = -1;
        for (let i = 0; i < this.oldArray.length; i++) {
            if (this.getFirstChar(this.oldArray[i]).toUpperCase() === char.toUpperCase()) {
                a = i;
            }
        }
        if (a === -1) {
            a = this.getRandomNumber();
        }
        return a;
    };

    sort() {
        if (this.newArray.length === 0) {
            let tmp = this.getRandomNumber();
            this.newArray[this.newArray.length] = this.oldArray[tmp];
            this.lastChar = this.getLastChar(this.oldArray[tmp]);
            this.oldArray.splice(tmp, 1);
        }

        while (!(this.oldArray.length === 0)) {
            let word = this.oldArray[this.findByFirstChar(this.lastChar)];
            console.log(word);
            this.newArray[this.newArray.length] = word;
            this.lastChar = this.getLastChar(word);
            console.log(this.lastChar);
            this.oldArray.splice(this.oldArray.indexOf(word), 1);
        }

        return this.newArray;
    }

}
let notSortedTowns = ['Винница', 'Ялта', 'Балановка', 'Ладыжин', 'Луцк', 'Владимир-Волынский', 'Ковель', 'Нововолынск', 'Днепропетровск', 'Булаховка', 'Днепродзержинск', 'Жёлтые Воды', 'Зеленодольск', 'Кривой Рог', 'Кринички', 'Марганец', 'Никополь', 'Новомосковск', 'Павлоград', 'Житомир', 'Андреевка', 'Бердичев', 'Коростень', 'Новоград-Волынский', 'Ужгород', 'Берегово', 'Виноградов', 'Иршава', 'Мукачево', 'Рахов', 'Свалява', 'Тячев Хуст', 'Запорожье', 'Бердянск', 'Днепрорудное', 'Камыш-Заря', 'Мелитополь', 'Токмак', 'Энергодар', 'Ивано-Франковск', 'Бурштын', 'Калуш', 'Коломыя', 'Белая Церковь', 'Борисполь', 'Бровары', 'Вышгород', 'Припять'];
let myArr = ['Мариуполь', 'Львов', 'Вов', 'Мом'];
let s = new MySort(notSortedTowns);
s.sort();
s.getNewArray();
