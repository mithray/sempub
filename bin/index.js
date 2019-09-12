#!/usr/bin/env node
const emiln = require('emiln')
const commands = require('../spec/routes.js')

emiln(commands, process.argv).then(async res => {
    console.log(await res)
    process.exit(1)
})
