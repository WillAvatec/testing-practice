function capitalize (string){
    if(typeof string !== 'string') return 'Not a string';
    let first = string[0].toUpperCase();
    if( string[0] === first ) {
        first = string[0].toLowerCase();
    }
    let rest = string.slice(1);
    return first + rest
}

export { capitalize }