import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DishesComponent } from "./dishes/dishes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DishDetailComponent } from "./dish-detail/dish-detail.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "/dishes", pathMatch: "full" },
  { path: "login", component:LoginComponent },
  { path: "dishes", component: DishesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: DishDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
