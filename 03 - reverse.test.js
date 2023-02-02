import { reverseString } from './03 - reverse'

test('reverse a single word', ()=>{
    expect(reverseString('word')).toBe('drow')
})

test('also counts spaces between words', ()=>{
    expect(reverseString('what a day')).toBe('yad a tahw')
})

test('works with symbols and emojis', ()=>{
    expect(reverseString('🔥 on fire')).toBe('erif no 🔥')
})