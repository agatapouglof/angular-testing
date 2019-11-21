import { greet } from './greet';

describe('Geeting', ()=>{
    it('should contain my name', () =>{
        expect(greet("Daniel")).toContain("Daniel");
    })
})