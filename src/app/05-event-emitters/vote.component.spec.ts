import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should emit an voteChanged event after upvote ', () => {
    let voteEventRes = null;
    component.voteChanged.subscribe(res => {
      voteEventRes = res; 
    })

    component.upVote();

    // expect(voteEventRes).not.toBeNull();
    expect(voteEventRes).toBe(1)
  });
});