
{

    //Problems-1

    const sumArray = (array:number[]):number=>{
        let sum = 0;

        for(let arr of array ){
            sum = sum + arr
        }
        return sum;
    }

    const sum = sumArray([1, 2, 8, 4, 5]);
    console.log(sum)

}
