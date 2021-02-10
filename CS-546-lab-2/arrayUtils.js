function checkarray(array) {
    let t = typeof array;
    if (array.length < 1) { throw 'Length of the array' }
    if (array == undefined) { throw 'Array is empty'; }
    if (t == "undefined") { throw 'Array type does not match' }

}

function head(array) {
    checkarray(array);
    return array[0];
}

function last(array) {
    checkarray(array);
    var l = array.length;
    return array[l - 1];
}

function remove(array, input) {
    checkarray(array);
    if (input > array.length || input < 0) { throw 'Index out of bound' } else {
        array.splice(input, 1);
        return (array);

    }

}

function range(end, value) {
    var arr = [];
    if (end < 0 && typeof end != 'integer') { throw 'End value not specified correctly' } else {
        for (let i = 0; i < end; i++) {
            if (value === undefined) {
                arr.push(i);
            } else {
                arr.push(value);
            }


        }
        return arr;
    }



}

function countElements(array) {
    let j = 0;
    var c = {};
    if (array === undefined && !(array instanceof array)) {
        throw `Array is undefined or not an Array`
    } else {
        for (var i = 0; i < array.length; i++) {
            c[array[i]] = 1 + (c[array[i]] || 0);
        }
    }
    return (c)
}

function isEqual(array1, array2) {
    checkarray(array1);
    checkarray(array2);
    //Allows empty array
    var i;
    if (array1.length == array2.length) {
        for (i = 0; i < array1.length; i++) {
            if (array1[i] === array2[i]) {} else { break; }
        }

    } else { throw 'Arrays are not equal' }
    if (i == array1.length) {
        return 'Array are equal';
    } else { throw 'Arrays are not equal' }

}

module.exports = { Name: "Dharika kapil", CWID: "10453441", head, last, remove, range, countElements, isEqual };