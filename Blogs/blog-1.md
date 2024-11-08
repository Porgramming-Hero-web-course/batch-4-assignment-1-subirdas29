
# Union Types(|): 
    A union type allows a variable to hold multiple types, meaning it can represent one type out of several possible types.

## Significance:
1. Increase Flexibility: Union types are helpful when a variable or function parameter can have multiple types, making the code more versatile.

    Example :
    ```
     A function that takes either a string or number parameter.

    function printValue ( value: string | number){
        console.log(value)
    }
    ```

2. Type Safety: Union types provide type checking while accommodatin multiple types, avoiding the pitfalls of using any. TypeScript will still enforce checks within each possible type.

    Example: 
    ```
    type Circle = { shape: "circle"; radius: number };
    type Square = { shape: "square"; side: number };

    function calculateArea(shape: Circle | Square) {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius ** 2;
        } else {
            return shape.side ** 2;
        }
    } 
    ```

3. Type Guards: With unions, you can use type guards to narrow down to a specific type, allowing TypeScript to infer properties and methods relevant to each case.

    Example: 
    ```
    typeof, instanceof, or custom type guards can help with narrowing down within union types.
    ```



# Intersection Types(&):
    An intersection type combines multiple types into one, meaning it requires the resulting type to have all properties of the intersected types.


## Significance:

1.  Combines Properties and Methods: Intersection types are useful when you want an object to meet multiple interface or type requirements.

    Example:
    
    ```
    Combining User and Admin types:
    type User = { name: string; email: string };
    type Admin = { adminLevel: number };
    type AdminUser = User & Admin;
    const admin: AdminUser = { name: "Alice", email: "alice@example.com", adminLevel: 1 };
    ```

2. Ensures Type Completeness: Intersection types are valuable when you want a variable to meet several criteria at once. This is common when combining features from multiple interfaces or classes.

    Example:
    ```
    When developing with frameworks like React, intersection types are often used to combine component props.
    ```

3.Mixins and Complex Type Composition: Intersection types are useful when you’re combining functionality or properties from different objects, especially with mixins or utility types. 

    Example:
    type Timestamped = { createdAt: Date };
    type Identifiable = { id: string };
    type Record = Timestamped & Identifiable;
    const myRecord: Record = { id: "123", createdAt: new Date() };
    
