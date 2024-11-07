{

    //problem-5

    

type Person = {
    name: string,
    age: number
}

const getProperty = <T , X extends keyof T>(obj: T, key: X): T[X] => {
    return obj[key]
}


const person:Person = { 
    name: "Alice",
     age: 30
     };

console.log(getProperty(person, "name"));
}