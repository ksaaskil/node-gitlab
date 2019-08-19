import program from 'commander';
import { camelizeKeys } from 'humps';
import paramCase from 'param-case';
import pkg from '../../package.json';
import map from './services.json';
import * as core from '../core';

function pick(props, obj) {
    return Object.keys(obj)
        .filter(key => props.indexOf(key) >= 0)
        .reduce((obj2, key) => (obj2[key] = obj[key], obj2), {});
}

// Add default options
program
    .version(pkg.version)
    .option('--gl-token <value>', 'Your Gitlab Personal Token')
    .option('--gl-oauth-token <value>', 'Your Gitlab OAuth Token')
    .option('--gl-job-token <value>', 'Your Gitlab Job Token')
    .option('--gl-host <value>', 'Your Gitlab API host (Defaults to https://www.gitlab.com)')
    .option('--gl-version <value>', 'The targetted Gitlab API version (Defaults to v4)')
    .option('--gl-sudo <value>')
    .option('--gl-camelize')

// Add all supported API's
for (const [name, methods] of Object.entries(map)) {
    const sub = program.command(paramCase(name));

    for(let m in methods){
        const subfunc = sub.command(paramCase(f)

        m.args.forEach(arg => {
            if (arg !== 'options' ) subfunc.option(`--${paramCase(arg)} <value>`)
        });
            
        // subfunc.action(args => {
        //     const casedArgs = camelizeKeys(args);
        //     const specialArgs = pick(Object.keys(baseOptions), casedArgs);
        //     const optionalArgs = pick(Object.keys(functionOptions), casedArgs);

        //     // Create service
        //     const s = new core[name](specialArgs);
            
        //     // Remove specialArgs
        //     Object.keys({...specialArgs, ...optionalArgs}).forEach(key => delete casedArgs[key])

        //     // Execute function
        //     return s[f](...Object.values(casedArgs), optionalArgs);
        // });      
    }
}

program.parse(process.argv);