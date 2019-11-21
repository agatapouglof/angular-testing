import {getCurrencies} from './getCurrencies'

describe('Currencies Test', ()=>{
    it('should contain the currencies', ()=>{
        const result =  getCurrencies();
        expect(result).toContain("USD");
        expect(result).toContain("AUD");
        expect(result).toContain("EUR");
    });
});