const yargs = require('yargs')
const stud= require('./data')

yargs.command({
    command: 'add',
    describe: 'addGrades',
    builder: {
        id: {
            describe: 'identity',
            demandOption: true,
            type: 'number',
        },
        name: {
            describe: 'Name',
            demandOption: true,
            type: 'string',
        },
        degree: {
            describe: 'Degree',
            demandOption: true,
            type: 'array',
        },

        comm: {
            describe: 'Comment',
            demandOption:false,
            type: 'string',
        },

    },
    handler: (x) => {
        stud.add(x.id, x.name, x.deg, x.comm)
    },
})

yargs.command({
    command: 'remove',
    describe: 'RemoveRecord',
    builder: {
        id: {
            describe: 'identity',
            demandOption: true,
            type: 'number',
        },

    }, handler: (x) => {
        stud.remove(x.id)
    },
})

yargs.command({
    command: 'read',
    describe: 'readRecord',
     handler: (x) => {
        stud.read(x.id)
    },
})

yargs.command({
    command: 'list',
    describe: 'Make Record',
    handler: () => {
        stud.list()
    }
})

yargs.parse()