const chalk = require('chalk')
const { parse } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')

const command = process.argv[2]

//customize yargs version
yargs.version('1.1.0')

//add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(`Title: ${argv.title} Body: ${argv.body}`)
//    console.log("Body: " + argv.body)
    }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

//list
yargs.command({
    command: 'list',
    describe: "list a note",
    handler: function(){
        console.log("listing your note")
    }
})

//read

yargs.command({
    command: 'read',
    describe: 'read your note',
    handler: function (argv) {
        console.log("Title: " + argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)