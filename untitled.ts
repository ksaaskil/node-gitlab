var gulp = require("gulp-json-editor");

import getParameterNames from 'get-parameter-names';

const commandsAndOptions = {
    Users: [
        { name: all, args: [test,something, options]}
    ]
}

// function isGetter (obj, prop) {
//   return !!obj.__lookupGetter__(prop);
// }

// function getInstanceMethods(obj) {
//   let keys: string[] = [];
//   let topObject = obj;

//   const onlyOriginalMethods = (p, i, arr) => {
//     return !isGetter(topObject, p)
//     && typeof topObject[p] === 'function'
//     && p !== 'constructor'
//     && (i === 0 || p !== arr[i - 1])
//     && keys.indexOf(p) === -1
//   }

//   do {
//     const l = Object.getOwnPropertyNames(obj)
//       .sort()
//       .filter(onlyOriginalMethods);

//     keys = keys.concat(l);

//     // walk-up the prototype chain
//     obj = Object.getPrototypeOf(obj);
//   } while (obj && Object.getPrototypeOf(obj))

//   return keys;
// }

// const isGetter = ( x, name ) => ( Object.getOwnPropertyDescriptor( x, name ) || {} ).get
// const isFunction = ( x, name ) => typeof x[ name ] === "function";
// const deepFunctions = x => 
//   x && x !== Object.prototype && 
//   Object.getOwnPropertyNames( x )
//     .filter( name => isGetter( x, name ) || isFunction( x, name ) )
//     .concat( deepFunctions( Object.getPrototypeOf( x ) ) || [] );
// const distinctDeepFunctions = x => Array.from( new Set( deepFunctions( x ) ) );
// // @ts-ignore:
// const getInstanceMethods = x => distinctDeepFunctions( x ).filter( name => name !== "constructor" && !~name.indexOf( "__" ) );

// function pick(props, obj) {
//     return Object.keys(obj)
//         .filter(key => props.indexOf(key) >= 0)
//         .reduce((obj2, key) => (obj2[key] = obj[key], obj2), {});
// }