{
    //problem-8

    type Person = {
        name: string;
        age: number;
        email: string
    }

    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]):boolean=>{
        for(let key of keys){
            if(!(key in obj))
              {
                return false
              }
        }
        return true
    }

    const person:Person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys<Person>(person, ["name", "age"]));
}