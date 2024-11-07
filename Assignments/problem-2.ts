{
    //problem-2

    const removeDuplicates = (arr : number[]):number[] =>{

        let uniqueNumber:number[] = []

        arr.forEach((num)=>{
            if(!uniqueNumber.includes(num)){
                uniqueNumber.push(num)
            }
        })
        return uniqueNumber;
    }

    const newArray = removeDuplicates([1,5,3,2,1,2,5])
    console.log(newArray)

}