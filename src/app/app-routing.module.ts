import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { AdduserComponent } from "./add-user/add-user.component";
import { UserComponent } from "./user/user.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  // { path: '', component: UsersComponent },
  { path: "users", component: UsersComponent },
  { path: "adduser", component: AdduserComponent },
  { path: "user/:id", component: UserComponent },
  { path: "edit/:id", component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
