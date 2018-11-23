
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './admin';


@Injectable()
export class AdminService {
    constructor(private http:HttpClient) { }
    registerAdmin(user:User){
        return this.http.post("/api/registerAdmin",user);
    }

    loginAdmin(user:User){
        return this.http.post("/api/loginAdmin",user);
    }
    listUsers(){
        return this.http.get("/api/listUsers");
    }

    editUser(id:number){
        return this.http.get("/api/editUser/"+id);
    }
    updateUser(user:User){
        return this.http.put("/api/updateUser",user);
    }
    listUsersPage(page:number,perpage:number){
        return this.http.get("/api/listUsersPage/"+page+'/'+perpage);
    }
    deleteUser(id:number){
        return this.http.delete("/api/deleteUser/"+id);
    }


    logoutUser(){
        return this.http.get("/api/logout");
    }


}