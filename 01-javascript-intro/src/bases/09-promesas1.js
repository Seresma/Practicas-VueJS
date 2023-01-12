console.log("Inicio");

// Promesa para tareas asincronas como peticiones al servidor
// resolve si sale todo bien y .then para lo que queremos devolver, reject para cuando hay algun error y .catch
new Promise((resolve, reject) => {
  // el cuerpo de la promesa SIEMPRE SE EJECUTA EN ORDEN SECUENCIAL EL RESOLVE EN UN HILO DIFERENTE AL FINAL
  console.log("cuerpo de la promesa");
  reject("Promesa con error");
  //resolve('Promesa resuelta')
})
  .then((msg) => console.log(msg))
  // Se puede omitir el argumento se pasa el argumento automaticamente
  .catch(console.log);

console.log("Fin");
