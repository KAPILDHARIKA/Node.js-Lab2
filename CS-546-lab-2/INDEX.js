const inda = require('./arrayUtils.js');
const indb = require('./stringUtils.js');
const indc = require('./ObjUtils.js');
const first = { x: 2, y: 3 };
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };


// Head Tests


//---------------------------------------------------------------------------------------------------------------------------------------------
try {
    // Should Fail
    const headTwo = inda.head([1, 2, 3, 4]);
    console.log(headTwo);
} catch (e) {
    //console.log(e);
    console.log('head failed successfully');
}

try {
    // Should Fail
    const headTwo = inda.remove([1, 2, 3, 4], -1);
    console.log(headTwo);
} catch (e) {
    //console.log(e);
    console.log('head failed successfully');
}




try {
    // Should Fail
    const headTwo = inda.countElements([13, '13', 13, 'hello', true, true]);
    console.log(headTwo);
} catch (e) {
    //console.log(e);
    console.log('head failed successfully');
}
try {
    // Should Fail
    const headTwo = inda.range(-1);
    console.log(headTwo);
} catch (e) {
    //console.log(e);
    console.log('head failed successfully');
}



//---------------------------------------------------------------------------------------------------------------------------------------------

try {
    // Should Fail
    const headthree = indb.capitalize('gooBAr');
    console.log(headthree);
} catch (e) {
    console.log('head failed successfullyyy');
}



//-----------------------------------------------------------------------------------------------------------------------------------------------

try {
    // Should Fail
    const headthree = indc.extend(second, first);
    console.log(headthree);
} catch (e) {
    //console.log(e);
    console.log('head failed successfullyyy');
}

try {
    // Should Fail
    const headthree = indc.extend();
    console.log(headthree);
} catch (e) {
    //console.log(e);
    console.log('head failed successfullyyy');
}