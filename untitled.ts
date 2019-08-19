import JsonEditor from 'gulp-json-editor';
import gulp from 'gulp';
import getParameterNames from 'get-parameter-names';
import * as core from '../core';

const isGetter = ( x, name ) => ( Object.getOwnPropertyDescriptor( x, name ) || {} ).get
const isFunction = ( x, name ) => typeof x[ name ] === "function";
const deepFunctions = x => 
  x && x !== Object.prototype && 
  Object.getOwnPropertyNames( x )
    .filter( name => isGetter( x, name ) || isFunction( x, name ) )
    .concat( deepFunctions( Object.getPrototypeOf( x ) ) || [] );
const distinctDeepFunctions = x => Array.from( new Set( deepFunctions( x ) ) );
// @ts-ignore:
const getInstanceMethods = x => distinctDeepFunctions( x ).filter( name => name !== "constructor" && !~name.indexOf( "__" ) );

function buildMap() {
	const map = {}

	for (const [name, service] of Object.entries(core)) {
		//@ts-ignore
		const s = new service();

		map[name] = [{
			name: 'constructor', args: getParameterNames(service)
		}];

		for(let m in getInstanceMethods(service)) {
			map[name].push({
				name: m, args: getParameterNames(s[m])
			})
		}
	}
}

// Generate the services map
gulp.src("./manifest.json")
 .pipe(JsonEditor(function(json) {
 	return buildMap();
  }))
  .pipe(gulp.dest("./dest"));