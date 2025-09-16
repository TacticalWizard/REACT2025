
//import heroesRenamed from "../data/heroes.data" if we have the default export we can rename the array
import { heroes, Owner, type Hero } from "../data/heroes.data"

const getHeroByid = (id: number): Hero => {
    //heroesRenamed //this is because we used default export
    const hero = heroes.find((hero) => {
        return hero.id === id; 
    })

    if ( !hero ){
        throw new Error(`No existe hero con el id ${id}`);
    }

    return hero;
}

console.log(`El hero por Id es ${JSON.stringify(getHeroByid(5))}`);

export const getHeroByOwner = (owner: Owner): typeof heroes => {
    //filtra heroes por su propietario
    //@param owner - el propietario por el cual filtrar(DC o Marvel)
    //@returns array de heroes pertenecientes al propietario.
    const heroesByOwner = heroes.filter((hero) => 
         hero.owner === owner 
    )

    return heroesByOwner;
}



