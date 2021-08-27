import { Component, OnInit } from "@angular/core";
import { CrudService } from "../crud.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  data: any = [];
  constructor(private crudservice: CrudService) {
    this.loaddata();
  }

  //Get all users data
  loaddata() {
    //Get all usera details
    this.crudservice.getUsers().subscribe((res: any) => {
      this.data = res;
    });
  } //Delete User
  deleteuser(id: any) {
    if (confirm("Estás segura que deseas eliminar este cliente?")) {
      // Initialize Params Object
      var myFormData = new FormData();

      // Begin assigning parameters
      myFormData.append("deleteid", id);
      this.crudservice.deleteuser(myFormData);
      //sweetalert message popup
      Swal.fire({
        title: "Hecho!!",
        text: "El cliente se ha eliminado ",
        icon: "success",
      });
      this.loaddata();
    }
  }
  ngOnInit(): void {}
}
