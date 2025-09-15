export interface Hero {
  id: Number;
  name: String;
  owner: /*String*/Owner; //We use a *type* when we want to specify the values entered
}

//Using * type *
 type Owner2 = 'DC' | 'Marvel' //now only these 2 values should be used for the owner property of the heroes

//another way to do it 
// * enum * typescript specific. Creates literal objects in JS.
export enum Owner {
  DC = 'DC', //0 if we do not redeclare the attribute
  Marvel = 'Marvel', //1 if we do not redeclare the attribute
}

export const heroes: Hero[] = [ //export the module for file 08
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
];

//console.log({heroes})

//export default heroes //default export the module for file 08. See that file for more details