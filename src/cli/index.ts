import program from 'commander';
import { camelizeKeys } from 'humps';
import paramCase from 'param-case';
import getParameterNames from 'get-parameter-names';
import pkg from '../../package.json';
import * as core from '../core';


// When rollup bundles the package, the function parameters and hidden/changed. Method names are same however.

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

// Add default options
// program
//     .version(pkg.version)
//     .option('--gl-token <value>', 'Your Gitlab Personal Token')
//     .option('--gl-oauth-token <value>', 'Your Gitlab OAuth Token')
//     .option('--gl-job-token <value>', 'Your Gitlab Job Token')
//     .option('--gl-host <value>', 'Your Gitlab API host (Defaults to https://www.gitlab.com)')
//     .option('--gl-version <value>', 'The targetted Gitlab API version (Defaults to v4)')
//     .option('--gl-sudo <value>')
//     .option('--gl-camelize')


class test20 {
    constructor(a){
        console.log(a)
    }

    testing(a,b) {
        console.log(a*b)
    }
}

let t = new test20('hey')

console.log(getParameterNames(t.testing))
console.log(getParameterNames(test20))

// console.log(getInstanceMethods(test))


// for (const [name, service] of Object.entries(core)) {
//     console.log(name)

//     const sub = program.command(paramCase(name));

    // const instanceMethods = 
    // getInstanceMethods(service);

    // console.log(instanceMethods)
    // for(let f in instanceMethods){
    //     const subfunc = sub.command(f.toLowerCase())
    //     const functionOptions = getArgs(f);

    //     functionOptions.forEach(arg => {
    //         if (arg !== 'options' ) subfunc.option(`--${paramCase(arg)} <value>`)
    //     });
            
    //     subfunc.action(args => {
    //         const casedArgs = camelizeKeys(args);
    //         const specialArgs = pick(Object.keys(baseOptions), casedArgs);
    //         const optionalArgs = pick(Object.keys(functionOptions), casedArgs);

    //         // Create service
    //         const s = new service(specialArgs);
            
    //         // Remove specialArgs
    //         Object.keys({...specialArgs, ...optionalArgs}).forEach(key => delete casedArgs[key])

    //         // Execute function
    //         return s[f](...Object.values(casedArgs), optionalArgs);
    //     });      
    // }
// }

// program.parse(process.argv);