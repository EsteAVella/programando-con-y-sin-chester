import { Controller, Get } from '@nestjs/common';

@Controller("users")
export class UserController {
  @Get("/users")
  getAllUsers() {
    return "Obtendria todos los users"
  }


}
