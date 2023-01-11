import { getHeroeById } from "./bases/08-imps-exps";

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroeById(id);

            if (hero)
                resolve(hero);
            else
                reject('Heroe no existe');
        }, 1000);
    });
};

getHeroeByIdAsync(1).then((h) => {
    console.log(`El heroe es ${h.name}`)
}).catch(console.log)
