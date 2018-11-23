import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../user";
@Injectable()
export class UserService{
    constructor(private http:HttpClient){}

    registerUser(user:User){
        return this.http.post("/api/registerUser",user);
    }
    loginUser(user:User){
        return this.http.post("/api/loginUser",user);
    }
    listUsers(){
        return this.http.get("/api/listusers");
        
    }

    listUsersPage(page:number,perpage:number){
        return this.http.get("/api/listUsersPage/"+page+'/'+perpage);
    }


    logoutUser(){
        return this.http.get("/api/logout");
    }
    editUser(id:number){
        return this.http.get("/api/editUser/"+id);
    }
    updateUser(user:User){
        return this.http.put("/api/updateUser",user);
    }
    deleteUser(id:number){
        return this.http.delete("/api/deleteUser/"+id);
    }

}