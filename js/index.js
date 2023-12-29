// Завдання на розуміння роботи методів масиву.

// Реалізувати функції, які працюватимуть ідентично методів some, filter, reduce:
// п.с. методи масивів використовувати не можна)

// п.п.с push можна

// п.п.п.с. заглядайте в документацію методів, щоб дізнатися, як вони працюють, бо зробить приблизно так само не канає:

// щоб кинути помилку в reduce: throw new TypeError('Reduce of empty array with no initial value')
// варіант з thisArg можна не враховувати. Якщо врахували, то дуже круто


function some(array, predicate) {
    if (!Array.isArray(array)) {
        throw new TypeError('Перший аргумент повинен бути масивом');
    } else if (typeof predicate !== 'function') {
        throw new TypeError('Умова повинна бути функцією');
    }

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (predicate(element, i, array)) {
            newArray.push(element);
        }
    }
    array.length = 0;
    Array.prototype.push.apply(array, newArray);

    return array;
}


const arr = [1, 2, 3];
const result = some(arr, el => el > 1);

console.log(result);  