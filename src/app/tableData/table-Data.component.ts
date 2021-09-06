import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './../user'
import { UserService } from './../users/user.service';


@Component({
	selector:'tableData',
	templateUrl:'./table-Data.component.html',
	styleUrls:['./table-Data.component.css']
})

export class TableDataComponent{
	name ='';
	email ='';
	phoneNo = '';
	isHide = true;
	abc;
	users?: User[];

	constructor(userService: UserService){
		this.users = userService.getUsers();
		this.abc = userService;
	}

	addData(){
		// this.abc.createUser();

		if(this.name==''){
			this.isHide =false;
		}
		else{
			let u = {
					id: Math.random(),
					name: this.name,
					email: this.email,
					phoneNo: this.phoneNo.toString(),
					editMode: false
				};
			this.abc.createUser(u)
			this.isHide =true;
		}
		this.name='';
		this.email='';
		this.phoneNo='';
	}
	editData(user: User){
		const index: number = this.users!.indexOf(user);
		this.users![index].editMode = true;
	}
	saveData(user:User){
		this.abc.updateUser(user)
	}
	deleteData(user: User){
		this.abc.deleteUser(user)
	}

}