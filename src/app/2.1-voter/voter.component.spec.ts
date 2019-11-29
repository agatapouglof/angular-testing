import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';
import { toBase64String } from '@angular/compiler/src/output/source_map';

describe('VoterComponent', () => {
  let component : VoterComponent;
  let fixture : ComponentFixture<VoterComponent>;

  beforeEach(() => {
    // create dynamic Module 
    TestBed.configureTestingModule({
      declarations:[VoterComponent]
    });
    // create a fixture that is wrapper around our component that give us
    // both access to view(template) and component instance
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // nativeElement return the root DOM element of this template
    fixture.nativeElement;

    // wrapper around nativeElement with usefull method for  the dom and component
    // and can run change detection manually
    // and get injected dependance of this element
    fixture.debugElement

  });

  it('should render total votes', () => {
    component.othersVote = 10;
    component.myVote = 1;

    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('11');

  });

  it('should highlight the upvote button if i have upvoted', ()=>{
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('it should increase total vote when I clean the upvote button', ()=>{
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    // params event , aditional data involved the event
    button.triggerEventHandler('click', null);

    // we already tested that the component can render the property totalVotes on the view 
    // so we don't need to test the view after the click only the component property
    expect(component.totalVotes).toBe(1);
  })
});
