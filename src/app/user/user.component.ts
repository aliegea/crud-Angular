import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router"; //ActivatedRoute module to get dynamicid from route
import { CrudService } from "../crud.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  id: any;
  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private crudservice: CrudService
  ) {
    //getting and storing dynamic ID
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    //Single User WEB API
    // Initialize Params Object
    var myFormData = new FormData();

    // Begin assigning parameters

    myFormData.append("userid", this.id);

    //user details post request
    this.crudservice.getSingleUser(myFormData);
    setTimeout(() => {
      this.user = this.crudservice.singleUserData;
    }, 100);
  }

  ngOnInit(): void {}
}
