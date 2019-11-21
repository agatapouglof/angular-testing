import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable, from, of , empty, throwError } from 'rxjs';
// import { Observable } from 'rxjs/Observable';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let service : TodoService;
  let todos = [1,2,3]

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property woith the items returned form the server', () => {
    spyOn(service, 'getTodos').and.callFake(() => {
      return from( [ todos ])
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos)
  });

  // test add method

  //  test if the service add methode is called from the component
  it('should call the server to save the changes when a new todo is added', ()=>{
    let spy = spyOn(service, 'add').and.callFake( t => {
      return empty();
    });

    component.add();

    // verify if the function spy have been called previously in the test
    expect(spy).toHaveBeenCalled();

  });


  // test the return  an observable value from a service
  it('should add a new todo returned from the server ', ()=>{
    let todo = {id : 1};
    let spy = spyOn(service, 'add').and.returnValue(from([todo]));
    
    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });


  // test the return  an error from a service
  it('should set the message property if an error is returned from the server ', ()=>{
    let error = 'error message from spy Service';
    let spy = spyOn(service, 'add').and.returnValue(throwError(error));
    
    component.add();

    expect(component.message).toBe(error);
  });



    /**
     * TEST ON DELETE METHOD
     */

    // test to see if the delete method of the service is called
    it('should call delete service methode',()=>{
      spyOn(service,'delete').and.returnValue(empty());

      component.delete('');

      expect(service.delete).toHaveBeenCalled();
    })

    // test on delete methode of component called and client confirm delete
    it('should call the methode  delete of the service if the user confirm', ()=>{
      spyOn(window, 'confirm').and.returnValue(true);
      spyOn(service,'delete').and.returnValue(empty());

      component.delete(1);


      expect(service.delete).toHaveBeenCalledWith(1);

    })

    // test on delete methode of component cwhen client refuse confirm
    it('should NOT call the server if the user refuse', ()=>{
      spyOn(window, 'confirm').and.returnValue(false);
      spyOn(service,'delete').and.returnValue(empty());

      component.delete(1);


      expect(service.delete).not.toHaveBeenCalled();

    })
});