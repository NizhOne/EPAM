
 var goods = [
    {
        "id": "1",
        "name": "Ноутбук Lenovo",
        "price": "18000",
        "img": "img/cars/notebook_lenovo.jpg"
    },
     {
         "id": "2",
         "name": "Фотокамера Nikon123",
         "price": "25000",
         "img": "img/cars/camera_nikon.jpg"
     },
     {
         "id": "3",
         "name": "Apple ipad",
         "price": "35000",
         "img": "img/cars/ipad.jpg"
     },
     {
         "id": "4",
         "name": "Samsung Galaxy",
         "price": "20000",
         "img": "img/cars/phone_galaxy.jpg"
     },
     {
         "id": "5",
         "name": "Телевизор SUPRA",
         "price": "19000",
         "img": "img/cars/tv_supra.jpg"
     },
    {
        "id": "6",
        "name": "Фотокамера Nikon345",
        "price": "25000",
        "img": "img/cars/camera_nikon.jpg"
    },
    {
         "id": "7",
         "name": "Apple ipad",
         "price": "35000",
         "img": "img/cars/ipad.jpg",
         "model":['k1036', 'k27', 'k348']
    },
     {
        "id": "8",
        "name": "Фотокамера Nikon1а",
        "price": "25000",
        "img": "img/cars/camera_nikon.jpg"
},
{
    "id": "9",
    "name": "Motorola",
    "price": "38000",
    "img": "img/cars/motorola.jpg"
},
{
    "id": "10",
    "name": "Фотокамера Nikon",
    "price": "25000",
    "img": "img/cars/camera_nikon.jpg",
    "model":['n6', 'ni27', 'n8']
},
{
    "id": "11",
    "name": "Apple ipad",
    "price": "354000",
    "img": "img/cars/ipad.jpg",
    "model":['e6', 'e7', 'e8']
}
];

function mySearch() {
    let name = null,
        min = null,
        max = null,
        model = null;
        if (typeof arguments[0] === 'string') {
            if (typeof arguments[1] === 'number') {
                if (typeof arguments[2] === 'number') {
                    if (typeof arguments [3] === 'string') {
                        name = arguments[0];
                        min = arguments[1];
                        max = arguments[2];
                        model = arguments[3];
                    } else {
                        name = arguments[0];
                        min = arguments[1];
                        max = arguments[2];
                    }
                }
            } else if (arguments[1] === 'string'){
                name = arguments[0];
                model = arguments[1];
            } else {
                name = arguments[0];
            }
        } else if (typeof arguments[0] === 'number'){
            if (typeof arguments[1] === 'number') {
                if (typeof arguments[2] === 'string') {
                    min = arguments[0];
                    max = arguments[1];
                    model = arguments[2];
                } else {
                    min = arguments[0];
                    max = arguments[1];
                }
            }
        } else {
            model = arguments[0];
        }
        console.log(name, min, max, model);
        let res = [];
        if (name !== null) {
            searchByName(name, res);
        } else if (min !== null && max !== null) {
            searchByPrice(min, max, res);
        } else {
            searchByModel(model, res);
        }

        return res;

}

function searchByName(name, arr) {
    for (let i = 0; i < goods.length; i++) {
        if (goods[i].name === name) {
            arr.push(goods[i]);
        }
    }
    console.log(arr);
    return arr;
}

function searchByPrice(min, max, arr) {
    for (let i = 0; i < goods.length; i++) {
        if ( + goods[i].price >= min &&  + goods[i].price <= max) {
            arr.push(goods[i]);
        }
    }
    return arr;
}

function searchByModel(model, arr) {
    for (let i = 0; i < goods.length; i++) {
        for (let j = 0; j < goods[i].model.length; j++) {
            if (goods[i].model[j] === model) {
                arr.push(goods[i]);
            }
        }
    }
    return arr;
}

mySearch(20000, 30000);