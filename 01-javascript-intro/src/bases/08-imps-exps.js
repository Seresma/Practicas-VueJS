// Cuando es una exportacion por defecto le puedo poner el nombre que quiera
// CIUDADO QUE A LA HORA DE IMPORTAR SE EJECUTA TODO EL ARCHIVO IMPORTADO ANTES

import heroes from "../data/heroes";

// const [dc, marvel] = owners;

export const getHeroeById = (id) => heroes.find((h) => h.id === id);

export const getHeroesByOwner = (owner) => heroes.filter((h) => h.owner === owner);

/* import { getHeroeById, getHeroesByOwner } from "./bases/08-imps-exps";

console.log(getHeroeById(2));

console.log(getHeroesByOwner('DC')); */
