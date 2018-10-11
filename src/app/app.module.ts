import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DishesComponent } from "./dishes/dishes.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { DishDetailComponent } from "./dish-detail/dish-detail.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { DishSearchComponent } from "./dish-search/dish-search.component";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishDetailComponent,
    DashboardComponent,
    DishSearchComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyABGfJUnFWSw5Q4ap_xBcIp61khfM_SSog",
      authDomain: "cookideas-3174b.firebaseapp.com",
      databaseURL: "https://cookideas-3174b.firebaseio.com",
      projectId: "cookideas-3174b",
      storageBucket: "cookideas-3174b.appspot.com",
      messagingSenderId: "577571910452"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
