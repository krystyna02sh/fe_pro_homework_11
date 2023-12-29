
function filter(array, predicate) {
    if (!Array.isArray(array)) {
        throw new TypeError('The first argument must be an array');
    } else if (typeof predicate !== 'function') {
        throw new TypeError('Predicate must be a function');
    }

    const result = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (predicate(element)) {
            result.push(element);
        }
    }

    return result;
}

const arr1 = [1, 2, 3];
const filteredArray = filter(arr1, el => el > 1);

console.log(filteredArray); 
