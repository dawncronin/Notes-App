const chalk = require('chalk')
const { parse } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//list
yargs.command({
    command: 'list',
    describe: "list a note",
    handler(){
        notes.listNotes()
    }
})

//read

yargs.command({
    command: 'read',
    describe: 'read your note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)