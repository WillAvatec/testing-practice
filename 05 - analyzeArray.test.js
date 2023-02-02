import { analyzeArray } from './05 - analyzeArray'

it('returns an object with all the required properties',()=>{
    expect(analyzeArray([1,8,3,4,2,6]))
    .toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})