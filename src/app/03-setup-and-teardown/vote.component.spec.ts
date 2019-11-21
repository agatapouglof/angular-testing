import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  it('it should increment totalVotes when upvoted', () => {
    // Assert
    let component = new VoteComponent();

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('it should decrement totalVotes when downvoted', () => {
    let component = new VoteComponent();

    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});