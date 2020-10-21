const chalk = require('chalk')
const fs = require('fs')

const addNote = (title, body) =>{
    const notes = loadNotes()

    const duplicateNote = notes.find( (note) =>  note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green("Note added"))
    } else {
        console.log(chalk.red('Note Title Taken'))
    }
    saveNotes(notes)
}

const removeNote = (title) => {
    const notes = loadNotes()
    let newNotes = notes.filter( (note) => note.title !== title)

    if (notes.length === newNotes.length) {
        console.log(chalk.green("No note found"))
    } else {
        console.log(chalk.red("Note removed"))
    }
    saveNotes(newNotes)
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.magenta("Your notes:"))
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find( (note) => note.title = title)
    if (note) {
        console.log(chalk.magenta(`${note.title}:`))
        console.log(note.body)
    } else {
        console.log(chalk.red("Note not found"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}