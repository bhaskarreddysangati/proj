import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../common/user.service';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['../app.component.css']
})

export class RegisterComponent implements OnInit {
    user:User;
    access:boolean=true;
    constructor(private us:UserService) {
        this.user = new User();
     }

    ngOnInit() { }
    register(){
        this.access = false;
        this.us.registerUser(this.user).subscribe((data)=>{
            if(data){
                alert("created successfully");
                this.user = new User();
            }
        });
    }
}