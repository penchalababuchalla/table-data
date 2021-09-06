import { Injectable } from '@angular/core';
import { User } from './../user'

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})

export class UserService {
  users?: User[];

  constructor(){
    this.users = [];
  }

  getUsers() { 
    return this.users; 
  }

  createUser(user: User){
    this.users!.push(user);
  }

  deleteUser(user: User){
    const index: number = this.users!.indexOf(user);
    this.users!.splice(index,1);
  }

  updateUser(user: User){
    const index: number = this.users!.indexOf(user);
    this.users![index].editMode = false;
  }

  activateUser(){

  }
}