function caesarCipher(string, factor = 1){
    //Pre-process string and make it lowercase
    let cased = string.toLowerCase();

    // Convert to utf decimal code
    let coded = convertToCharcode(cased);

    // Sum code with shifting factor
    let mapped = shiftInts(coded,factor);

    // Add new coded value to number
    return convertToString(mapped)
}

function convertToCharcode(string){
    let utf_code = [];
    [...string].forEach(letter => {
        utf_code.push(letter.charCodeAt())
    });
    return utf_code
}

function convertToString(integerArr){
    let result = ''
    integerArr.forEach((changed)=>{
        result += String.fromCharCode(changed)
    })
    return result
}

// This one is the important

/* 
    For each number in the array,
    If the number is between 97 and 122{
        Sum factor + number
        If the factor + number is greater than 122{
            Convert it into 97 and suma el restante
        }
    }
    If the number is between 65 and 90{
        Sum factor + number
        If the factor + number is greater than 90{
            Convert it into 65 and suma el restante
        }
    }
*/

function shiftInts(arr,factor){
    return arr.map((int)=>{
        if(int >= 97 && int <= 121){
            return int + factor;
        }else{
            return 96 + factor;
        }
    })
}


export { caesarCipher }