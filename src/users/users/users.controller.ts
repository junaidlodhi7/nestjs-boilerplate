import {Controller, Get, Post, Body, Put, Param, Delete, Query, Header,Response, Logger} from '@nestjs/common';
import { UserServiceService } from '../user-service/user-service.service';
import { createSecureServer } from 'http2';


@Controller('/users')
export class UsersController {
    constructor(private readonly userService: UserServiceService) { }

    @Get()
    findall(): any {
        Logger.log("client requested------>GET/users");
        return this.userService.findall();

    }

    @Post()
    createUser(@Body() body): any{
        Logger.log("client requested------>POST/users");
        return this.userService.create(body)
    }


    @Get(':id')
    GetOne(@Param() params) {
        Logger.log("client requested------>GET/users/:id");
        return  this.userService.findById(params.id)
    }


    @Delete(':id')
    @Header('Content-Type', 'application/json')
    Update(@Body() body,@Param() params) {
        Logger.log("client requested------>DELETE/users/:id");
       return this.userService.deleteOne(params.id);
    }




}
