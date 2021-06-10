import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  email: string;
  password: string;
  confirmPassword: string;
  passwordError: boolean;
  last_name: string;
  name: string;
  birthday: string;

  constructor(public userService: UsersService) {}

  register() {
    const user = {
      email: this.email,
      password: this.password,
      password_confirmation: this.confirmPassword,
      last_name: this.last_name,
      name: this.name,
      birthday: this.birthday

    };

    this.userService.register(user).subscribe(data => {
      console.log(data);
    });
  }
}
