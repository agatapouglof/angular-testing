import { UsersComponent } from './users.component';
import { UserService } from './user.service';

import { from, empty, throwError} from 'rxjs';

describe('User component TESTING',()=>{
    let usersComponent : UsersComponent;
    let userService : UserService;
    let users_data = [{id : 1, name : 'Daniel'}, {id : 2, name : 'Nougbele'}, {id : 3, name : 'Jonatan'}];
    let user = {id : 1, name : 'Daniel'};


    beforeEach(()=>{
        userService = new UserService(null);
        usersComponent = new UsersComponent(userService);
        usersComponent.users = users_data;
    });
    // verifier la recuperation des users depuis le service lors de ngOnInit
    //  verifier le confim ok or !ok de la confirm box
    // verifier la suppression dans le tableau users du composant apres l'appel de la fonction
    //  verifier la non suppresion si le service retourne une erreur

    it('should fill the array of users with data from the service', ()=>{
        // Arrange
        spyOn(userService, 'getUsers').and.returnValue(from([users_data]));     

        // Act
        usersComponent.ngOnInit();

        // Assert 
        expect(usersComponent.users).toBe(users_data);

    });

    it('should call the delete service after confirm true', ()=>{
        usersComponent.users.push(user);
        spyOn(window, 'confirm').and.returnValue(true);
        spyOn(userService, 'deleteUser').and.returnValue(empty());

        usersComponent.deleteUser(user);

        expect(userService.deleteUser).toHaveBeenCalledWith(user.id);
    });

    it('should not call the delete service after confirm false', ()=>{
        usersComponent.users.push(user);
        spyOn(window, 'confirm').and.returnValue(false);
        spyOn(userService, 'deleteUser').and.returnValue(empty());

        usersComponent.deleteUser(user);

        expect(userService.deleteUser).not.toHaveBeenCalled();
    });

    it('should delete user from array ', ()=>{
        usersComponent.users = [];
        usersComponent.users.push(user);
        spyOn(window, 'alert').and.callFake(() => {}); 
        spyOn(userService, 'deleteUser').and.returnValue(empty());
        spyOn(window, 'confirm').and.returnValue(true);

        usersComponent.deleteUser(user);

        expect(usersComponent.users.includes(user)).toBeFalsy();
        // expect(usersComponent.users.length).toBe(0);
    });

    it('should not delete user if userservice return an error', ()=>{
        let usr = {id : 8, name : "test"};
        usersComponent.users.push(usr);
        // because delete call alert and we don't need it to popup when testing
        spyOn(window, 'alert').and.callFake(() => {});
        spyOn(window, 'confirm').and.returnValue(true); 
        spyOn(userService, 'deleteUser').and.returnValue(throwError('erreur id user'));

        usersComponent.deleteUser(usr);

        // expect(window.alert).toHaveBeenCalled();
        expect(usersComponent.users.includes(usr)).toBeTruthy();
    });

});