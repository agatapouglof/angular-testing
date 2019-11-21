import { compute } from './compute';

describe('compute test', () =>{
    it('should return 0 zero', ()=>{
        let result  = compute(-1);
        expect(result).toBe(0)
    });

    it('should increment if it is positive', () => {
        let result = compute(1);
        expect(result).toBe(2);
    })
});