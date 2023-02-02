function reverseString(str){
    return Array.from(str).reverse().join("");
}

export { reverseString }

/* 

// This only works when no emojis are found
// This has to be with the space emojis occupied /u9000/
// UniCode -- need more research

    function reverseString(str){
        let result = '';
        for(let i = str.length-1;i >= 0;i--){
            result += str[i] ;
        }
        return result
    }
*/