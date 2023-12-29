const arr2 = [1, 2, 3];
function customReduce(array, callbackfn, initialValue) {

    if (Object(array) !== array) {
        throw new TypeError("Object required");
    }

    const len = array.length >>> 0;

    if (typeof callbackfn !== "function") {
        throw new TypeError("Callback must be a function");
    }

    if (len === 0 && initialValue === undefined) {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    let k = 0;
    let accumulator = undefined;

    if (initialValue !== undefined) {
        accumulator = initialValue;
    } else {

        let kPresent = false;
        while (kPresent === false && k < len) {
            const Pk = String(k);
            kPresent = Object.prototype.hasOwnProperty.call(array, Pk);
            if (kPresent === true) {
                accumulator = array[Pk];
            }
            k++;
        }

        if (kPresent === false) {
            throw new TypeError("No valid initial value");
        }
    }


    while (k < len) {
        const Pk = String(k);
        const kPresent = Object.prototype.hasOwnProperty.call(array, Pk);
        if (kPresent === true) {
            const kValue = array[Pk];
            accumulator = callbackfn.call(undefined, accumulator, kValue, k, array);
        }
        k++;
    }

    return accumulator;
}

const sum = customReduce(
    arr2,
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
console.log(sum); 
