interface Person{
    name:string;
    id:number;
} 
interface Product{
    creator:Person;
    name:string;
    id:number;
}
const createProduct = (name: string, id: number,person:Person): Product =>
    ({
        creator: person,
        name: name,
        id: id
    })

const createPerson = (name: string, id: number): Person => 
    ({
        name: name,
        id:id
    })    

let marcos=createPerson('Marcos', 8888);
console.log(marcos);

let software = createProduct('soft', 1022, marcos);
console.log(software);

 