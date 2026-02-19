import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*plan the routes
    GET /users
    GET /users/:id  (id is param)
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    @Get() //Get /users
    findALL(){
        return []
    }

    @Get(':id') //
    findOne(@Param('id')id: string) {
        return { id }
    }

    //@Get()//"using thunderclient to test these endpoints"

    @Post()
    create(@Body() user: {}){
        return user
    }

    @Patch(':id') //
    update(@Param('id')id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate} //Whatever we recie e from body
    }

    @Delete(':id') //
    delete(@Param('id')id: string) {
        return { id }
    }
        
}
