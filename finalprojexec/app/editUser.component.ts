import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "./user";
import { UserService } from "./common/user.service";

@Component({
    selector:"editUser",
    templateUrl:"./editUser.component.html",
    styleUrls:['./app.component.css','./overide.css']
})
export class EditUserComponent{
    user:User;
    constructor(private route:ActivatedRoute,private cs:UserService,private router:Router){
        this.user = new User();
        var userId = this.route.snapshot.params['userId'];
        alert(userId);
        this.cs.editUser(userId).subscribe((data)=>{
            if(data){
                this.user = <User>data;
            }
        })

    }
    update(){
        this.cs.updateUser(this.user).subscribe((data)=>{
            if(data){
                this.router.navigate(['/dashboard']);
            }
        })
    }


}