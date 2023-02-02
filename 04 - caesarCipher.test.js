import { caesarCipher } from './04 - caesarCipher'

it('works with a shift factor of 1',()=>{
    expect(caesarCipher('defend',1)).toBe('efgfoe')
})
/*
it('works with letters from a to z',()=>{
    expect(caesarCipher('zabcjz',1)).toBe('abcdka')
})

it('works with any letter case',()=>{
    expect(caesarCipher('DefEnd',1)).toBe('EfgFoe')
})

it('works with any shift factor',()=>{
    expect(caesarCipher('defend',5)).toBe('ijkjsi');
    expect(caesarCipher('defend',3)).toBe('ghihqg');
    expect(caesarCipher('defend',4)).toBe('hijirh');
    expect(caesarCipher('defend',23)).toBe('abcbka');
})

it('factor is set to 1 if no included',()=>{
    expect(caesarCipher('defend')).toBe('efgfoe')
}) */