#!/usr/bin/env node

const args = process.argv.splice(2);
const config = require('../package.json');
const appleSerialSearch = require('../index');

function help(){
    console.log(`
Usage:      ${config.name} <type> <serial>
Example:    ${config.name} mac XXXXXXXXX
            <type>    Either "ipad" or "mac"   
`);
}

if(args.length !== 2){
    help();
    process.exit(1);
}

appleSerialSearch(args[0], args[1]).then(console.log).catch(console.error);
