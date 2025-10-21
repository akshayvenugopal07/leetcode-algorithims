// shallow copy
let original = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, original);
shallowCopy.b.c = 42;
console.log(original.b.c); // Outputs: 42 (because of shallow copy)

// deep copy
let originalDeep = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(originalDeep));
deepCopy.b.c = 42;
console.log(originalDeep.b.c); // Outputs: 2 (because of deep copy)


function deepClone(obj, hash = new WeakMap()) {
    // Handle primitives and null
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle circular references
    if (hash.has(obj)) {
        return hash.get(obj);
    }

    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj);
    }

    // Handle RegExp
    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags);
    }

    // Handle Array
    if (Array.isArray(obj)) {
        const arrCopy = [];
        hash.set(obj, arrCopy);  // Store reference before recursion
        obj.forEach((item, index) => {
            arrCopy[index] = deepClone(item, hash);
        });
        return arrCopy;
    }

    // Handle Map
    if (obj instanceof Map) {
        const mapCopy = new Map();
        hash.set(obj, mapCopy);
        obj.forEach((value, key) => {
            mapCopy.set(key, deepClone(value, hash));
        });
        return mapCopy;
    }

    // Handle Set
    if (obj instanceof Set) {
        const setCopy = new Set();
        hash.set(obj, setCopy);
        obj.forEach(value => {
            setCopy.add(deepClone(value, hash));
        });
        return setCopy;
    }

    // Handle plain objects
    const objCopy = Object.create(Object.getPrototypeOf(obj));
    hash.set(obj, objCopy);  // Store reference before recursion

    // Copy all own properties (including non-enumerable and symbols)
    Reflect.ownKeys(obj).forEach(key => {
        objCopy[key] = deepClone(obj[key], hash);
    });

    return objCopy;
}