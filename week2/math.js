const add = (x, y) => {
    return x + y;
};

const mul = (x,y) => {
    return x * y;
};

const PI = 3.14
const obj = { one: 1, two: 2 }


// module.exports.add = add;
// module.exports.mul = mul;
// module.exports.PI = PI;
// module.exports.obj = obj;

// export default add;
// export default {
//     add,
//     mul,
//     PI,
//     obj
// }
export {
    add,
    mul,
    PI,
    obj
}