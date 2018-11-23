import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AdminService } from './admin.service';
import { User } from '../user';

@Component({
    selector: 'admin-register',
    templateUrl:'./admin.register.component.html'
})

export class AdminRegisterComponent implements OnInit {
    admin:User;
    constructor(private ad:AdminService,private router:Router) {
        this.admin = new User();
     }

    ngOnInit() { }

    register(){
        
    }


}