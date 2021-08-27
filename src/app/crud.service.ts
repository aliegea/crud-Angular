import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  userData: any;
  userid: any;
  singleUserData: any;
  constructor(private http: HttpClient) {}
  public getSingleUser(userid: any) {
    return this.http
      .post("http://192.168.64.4/users.php", userid)
      .subscribe((res: any) => {
        this.singleUserData = res[0];
      });
  }

  public getUsers() {
    return this.http.get("http://192.168.64.4/users.php");
  }
  public adduser(userData: any) {
    return this.http
      .post("http://192.168.64.4/users.php", userData)
      .subscribe((res: any) => {
        this.getUsers();
      });
  }
  //edit user
  public updateuser(userid: any) {
    return this.http
      .post("http://192.168.64.4/users.php", userid)
      .subscribe((res: any) => {});
  }
  //delete user
  public deleteuser(userid: any) {
    return this.http
      .post("http://192.168.64.4/users.php/", userid)
      .subscribe((res: any) => {});
  }
  public edituser(userData: any) {
    return this.http
      .post("http://192.168.64.4/users.php", userData)
      .subscribe((res: any) => {
        this.getUsers();
      });
  }
}
