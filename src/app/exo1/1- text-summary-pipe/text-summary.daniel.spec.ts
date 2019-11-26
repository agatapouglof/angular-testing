import {TextSummaryPipe} from './text-summary.pipe';

describe('test pipe text summary', ()=>{
    let pipeSummary : TextSummaryPipe;
    beforeEach(()=>{
        pipeSummary = new TextSummaryPipe();
    });

    // function with empty parameters 
    it('should return empty string',()=>{
        let result = pipeSummary.transform(undefined);
        
        expect(result).toBe('');
    });

    // function with only value parameter no args parameter
    it('should return 10 caracters string', ()=>{
        let result = pipeSummary.transform('Ten Caracters Transform pipe result');

        expect(result).toBe('Ten Caract...');
    });
    // function with specified args(legth of the summary result)
    it('should return specified length result',()=>{
        let summaryLength = 3;

        let result = pipeSummary.transform('Ten Caracters Transform pipe result', summaryLength);

        // expect(result).toBe('Ten...');
        expect(result.length).toEqual(summaryLength+3);
    })

    // do the case input string is less than the limit args

})