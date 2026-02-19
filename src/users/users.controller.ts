import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import{ UsersService } from './users.service';

@Controller('users')
export class UsersController {
    /*plan the routes
    GET /users
    GET /users/:id  (id is param)
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    constructor(private readonly usersService: UsersService) {}//creates instance of service, is a singleton

    @Get() //Get /users or /users?role=value
    findALL(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN')
    {
        return this.usersService.findAll(role)
    }

    @Get(':id') //
    findOne(@Param('id')id: string) {//al params are strings, need to convert to number(create unary +)
        return this.usersService.findOne(+id)
    }
    //@Get()//"using thunderclient to test these endpoints"

    @Post()
    create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.usersService.create(user)
    }

    @Patch(':id') //
    update(@Param('id')id: string, @Body() userUpdate: {name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        //return { id, ...userUpdate} //Whatever we receive from body
        return this.usersService.update(+id, userUpdate)
    }

    @Delete(':id') //
    delete(@Param('id')id: string) {
        return this.usersService.delete(+id) //unary
    }
        
}
