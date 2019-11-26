import { LikeComponent } from './like.component';

describe('LIKE COMPONENT TEST', ()=>{
    let likeComponent : LikeComponent;
    
    beforeEach(()=>{
        likeComponent = new LikeComponent();
    });

    it('should change iLike value on click', () =>{
        likeComponent.click();
        expect(likeComponent.iLike).toBeTruthy();
    });

    it('should increment totalLikes value', () =>{
        likeComponent.click();
        expect(likeComponent.totalLikes).toBe(1);
    });

    it('should change iLike value to false', () =>{
        likeComponent.iLike = true;
        likeComponent.click();
        expect(likeComponent.iLike).toBeFalsy();
    });

    it('should decrement totalLikes value', () =>{
        // Arrange 
        likeComponent.totalLikes = 1;
        likeComponent.iLike = true;

        // Act
        likeComponent.click();

        // Assert
        expect(likeComponent.totalLikes).toBe(0);
    });
})