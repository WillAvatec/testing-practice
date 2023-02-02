import { calculator } from './01 - calculator'

test('sum works',()=>{
    expect(calculator.sum(5,7)).toBe(12)
})

test('subtract works', ()=>{
    expect(calculator.sub(10,3)).toBe(7)
})

test('multiply works', ()=>{
    expect(calculator.multiply(10,3)).toBe(30)
})

test('divide works', ()=>{
    expect(calculator.divide(12,3)).toBe(4)
})