const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea '
}



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Tarea actualizada'
        },
        completado
    })
    .command('borrar', 'Borrar la tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Tarea elminada'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}