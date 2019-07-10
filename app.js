const { argv } = require("./config/yargs");

const { crear, getListar, actualizar,eliminar } = require("./por-hacer/por-hacer");

const colors = require("colors");

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = crear(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    let listado = getListar();
    for (let tarea of listado) {
      console.log("=========================".green);
      console.log("=======POR HACER========".red);
      console.log("Descripción: ", tarea.descripcion);
      console.log("Estado: ", tarea.completado);
      console.log("=========================".green);
    }
    break;
  case "actualizar":
    let actualizado = actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case "borrar":
    let borrado = eliminar(argv.descripcion);
    console.log(borrado);
    break;
  default:
    console.log("Comando no es reconocido");
}
