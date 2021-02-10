function checkstring(string) {
    if (string.length == 0) {
        throw 'String does not exists';
    } else { return string; }

    if (typeof string == "string") {
        return string;
    } else { throw 'Not of type String' };
}

function capitalize(string) {
    checkstring(string);
    return string[0].toUpperCase() + string.slice(1).toLowerCase();

}

function repeat(string, number) {
    checkstring(string);
    if (number >= 0) {
        return string.repeat(number);
    } else { throw 'Number less than zero' }

}

function countChars(string) {
    checkstring(string);
    let l = string.length;
    let c = {};
    var i = 0;
    for (i = 0; i < l; i++) {
        c[string[i]] = 1 + (c[string[i]] || 0);
    }
    return c;
}

module.exports = { Name: "Dharika kapil", CWID: "10453441", capitalize, repeat, countChars };