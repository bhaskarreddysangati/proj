import { Component } from "@angular/core";
import { User } from "./user";
import { Router } from "@angular/router";
import { UserService } from "./common/user.service";

@Component({
    selector:"userList",
    templateUrl:"./userList.component.html",
    styleUrls:['./userList.component.css']
})
export class UserListComponent{
    users:User
    constructor(private cs:UserService,private router:Router){
        this.cs.listUsers().subscribe((data)=>{
            if(data){
                this.users = <User>data;
            }
        })
    }
    delete(id:number){
        this.cs.deleteUser(id).subscribe((data)=>{
            if(data){
                this.cs.listUsers().subscribe((data)=>{
                    if(data){
                        this.users = <User>data;
                    }
                })
            }
        })
    }
    logout(){
        localStorage.removeItem("user");
        this.router.navigate(['/login']);
    }
}