import { VoterComponent } from './voter.component';


describe('VOTER COMPONENT TESTING', ()=>{
    let voterComponent : VoterComponent;

    beforeEach(()=>{
        voterComponent = new VoterComponent();
    });

    // check event emitted
    // check good event transmited
    it('should emit event after upvote', ()=>{
        let resultEvent ;
        voterComponent.myVoteChanged.subscribe(res => {resultEvent = res;});

        voterComponent.upVote();

        expect(resultEvent).toEqual({myVote : 1});
    });

    it('should emit good event after downvote', ()=>{
        let resultEvent ;
        voterComponent.myVoteChanged.subscribe(res => {resultEvent = res;});

        voterComponent.downVote();

        expect(resultEvent).toEqual({myVote : -1});
    });

    // check upvote
    it('should increment myVote after upvote', ()=>{
        voterComponent.upVote();
        expect(voterComponent.myVote).toBe(1);
    });

    it('should NOT add vote to myVote if already has voted ',()=>{
        voterComponent.myVote = 1;
        voterComponent.upVote();
        expect(voterComponent.myVote).toBe(1);
    });

    it('should set myVote to zero if I upVote after downvote', ()=>{
        voterComponent.downVote();
        voterComponent.upVote();
        expect(voterComponent.myVote).toBe(0);
    });
    // check downvote
    it('should decrement myVote after downvote', ()=>{
        voterComponent.downVote();
        expect(voterComponent.myVote).toBe(-1);
    });
    // check total before and after a vote
    it('should return exact number of totalVotes after upVote', ()=>{
        voterComponent.othersVote = 10
        voterComponent.upVote();
        expect(voterComponent.totalVotes).toBe(11);
    });
    it('should return exact number of totalVotes after downVote', ()=>{
        voterComponent.othersVote = 10
        voterComponent.downVote();
        expect(voterComponent.totalVotes).toBe(9);
    });


});