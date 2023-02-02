function analyzeArray (arr) {
    if(arr.length <= 0) return [];
    const preprocessed = checkArr(arr);
    return {
        average: getAverage(preprocessed),
        min: Math.min(...preprocessed),
        max: Math.max(...preprocessed),
        length: preprocessed.length
    }
}

function checkArr(array){
    return array.filter((element)=>{
        return typeof element === 'number'
    })
}

function getAverage(array){
    let sum = array.reduce((acc,next)=>{
        return acc + next
    },0)
    return sum / array.length
}

export { analyzeArray }