import { capitalize } from './02 - capitalize'

test('works with a simple word', ()=>{
    expect(capitalize('weird')).toBe('Weird')
})

test("returns error if argument isn't a string", ()=>{
    expect(capitalize(123)).toBe('Not a string')
})

test("decapitalize if argument starts in Uppercase",()=>{
    expect(capitalize('Anna')).toBe('anna')
})