{

    //problem-3

    
    const countWordOccurrences = (sentence:string, word:string): number =>{
        const str = sentence.split(' ')
        
        let count = 0;

        str.forEach(ele=>{
           if(ele.toLowerCase() === word){
            count++;
           }
        })
        return count
    }

    const sentence:string = "I love typescript"
    const word:string = "typescript"

    const countNum = countWordOccurrences(sentence,word)
    console.log(countNum)




}