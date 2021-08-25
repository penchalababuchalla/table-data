import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './../user'


@Component({
	selector:'tableData',
	templateUrl:'./table-Data.component.html',
	styleUrls:['./table-Data.component.css']
})

export class TableDataComponent{
	name ='';
	email ='';
	phoneNo = '';

	users?: User[];
	constructor(){
		this.users = []
	}
	addData(){
		if(this.name==''){
		}
		else{
			this.users!.push(
				{
					id: Math.random(),
					name: this.name,
					email: this.email,
					phoneNo: this.phoneNo.toString(),
					editMode: false
				}
			);
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
		const index: number = this.users!.indexOf(user);
		this.users![index].editMode = false;
	}
	deleteData(user: User){
		const index: number = this.users!.indexOf(user);
		this.users!.splice(index,1);
	}

}